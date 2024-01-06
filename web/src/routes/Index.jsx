import { useEffect, useState } from 'react';
import { CreateNewList } from '../components/CreateNewList';
import { useLoaderData } from 'react-router-dom';

function getEatery() {
	fetch('http://localhost:3000/api/eatery')
		.then((data) => data.json())
		.then((data) => {
			console.log(data);
		});
}

async function loader() {
	const test = await fetch(
		'http://localhost:3000/api/list?' +
			new URLSearchParams({
				userId: JSON.parse(localStorage.getItem('userId')),
			})
	);
	const result = await test.json();
	console.log(result);
	return result;
}

function Index() {
	const [newList, setNewList] = useState(false);
	const testData = useLoaderData();

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
			<button onClick={getEatery}>Get Eatery</button>
			<button onClick={() => setNewList(!newList)}>
				Create New List
			</button>
			{newList && <CreateNewList toggleNewList={setNewList} />}
			{testData != null &&
				testData.map((item) => (
					<div key={item._id}>
						<h1>{item.name}</h1>
						<p>{item.description}</p>
					</div>
				))}
		</div>
	);
}

export { Index, loader };
