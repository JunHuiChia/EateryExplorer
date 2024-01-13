import { useEffect, useState } from 'react';
import { CreateNewList } from '../components/CreateNewList';
import Listbox from '../components/ListBox';
import { useLoaderData } from 'react-router-dom';
import ListApi from '../apis/ListApi';

async function loader() {
	const userId = JSON.parse(localStorage.getItem('userId'));
	return await ListApi.getAll(userId);
}

function Index() {
	const [newList, setNewList] = useState(false);
	const testData = useLoaderData();
	console.log('Index: ', testData);

	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem('userId'));
		if (userId == null) {
			localStorage.setItem(
				'userId',
				JSON.stringify(Math.floor(Math.random() * 1000000000000))
			);
		}
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to the home page!</p>
			<button onClick={() => setNewList(!newList)}>
				Create New List
			</button>
			{newList && <CreateNewList toggleNewList={setNewList} />}
			{testData != null &&
				testData.map((item) => <Listbox key={item._id} lists={item} />)}
		</div>
	);
}

export { Index, loader };
