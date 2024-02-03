import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CategoryApi from '../apis/CategoryApi';
import EateryBox from '../components/EateryBox';
import { CreateNewEatery } from '../components/CreateNewEatery';

let categoryId;
let listId;

async function loader({ params }) {
	console.log(params);
	listId = params.listId;
	categoryId = params.categoryId;
	return await CategoryApi.getOne(categoryId);
}

function Category() {
	const [newEatery, setNewEatery] = useState(false);
	const categoryData = useLoaderData();
	console.log('Category Api Data: ', categoryData);

	return (
		<div>
			<h1>{categoryData.name}</h1>
			<button onClick={() => setNewEatery(!newEatery)}>
				Create New Eatery
			</button>
			{newEatery && (
				<CreateNewEatery
					listId={listId}
					categoryId={categoryId}
					toggleNewEatery={setNewEatery}
				/>
			)}
			{categoryData != null &&
				categoryData.eatery.map((eatery) => (
					<EateryBox key={eatery._id} eatery={eatery} />
				))}
			{categoryData.eatery.length == 0 && <p>No Eateries Here...</p>}
		</div>
	);
}

export { Category, loader };
