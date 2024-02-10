import { useLoaderData } from 'react-router-dom';
import ListApi from '../apis/ListApi';
import CategoryBox from '../components/CategoryBox';
import { useState } from 'react';
import { CreateNewCategory } from '../components/CreateNewCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

let listId;

async function loader({ params }) {
	console.log(params);
	listId = params.id;
	return await ListApi.getOne(listId);
}

function List() {
	const [newCategory, setNewCategory] = useState(false);
	const listData = useLoaderData();
	// console.log('List: ', listData);

	return (
		<div>
			<div className='collection-name'>
				<h1> {listData.name} </h1>
				<FontAwesomeIcon icon='fa-solid fa-pen-to-square' />
			</div>
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
