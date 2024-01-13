import { useLoaderData } from 'react-router-dom';
import ListApi from '../apis/ListApi';
import CategoryBox from '../components/CategoryBox';
import { useState } from 'react';
import { CreateNewCategory } from '../components/CreateNewCategory';

let listId;

async function loader({ params }) {
	console.log(params);
	listId = params.id;
	var test = await ListApi.getOne(listId);
	return test;
}

function List() {
	const [newCategory, setNewCategory] = useState(false);
	const listData = useLoaderData();
	// console.log('List: ', listData);

	return (
		<div>
			<h1>{listData.name}</h1>
			<button onClick={() => setNewCategory(!newCategory)}>
				Create New Category
			</button>
			{newCategory && (
				<CreateNewCategory
					listId={listId}
					toggleNewCategory={setNewCategory}
				/>
			)}
			<h2>Categories:</h2>
			{listData != null &&
				listData.category.map((category) => (
					<CategoryBox key={category._id} category={category} />
				))}
		</div>
	);
}

export { List, loader };
