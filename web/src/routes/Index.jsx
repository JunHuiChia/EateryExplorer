import { useState } from 'react';
import { CreateNewList } from '../components/CreateNewList';
import { useLoaderData } from 'react-router-dom';

function getEatery() {
	fetch('http://localhost:3000/eatery')
		.then((data) => data.json())
		.then((data) => {
			console.log(data);
		});
}

async function loader() {
	const test = await fetch('http://localhost:3000/eatery');
	const result = await test.json();
	console.log(result);
	return result;
}

function Index() {
	const [newList, setNewList] = useState(false);
	const testData = useLoaderData();

	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to the home page!</p>
			<button onClick={getEatery}>Get Eatery</button>
			<button onClick={() => setNewList(!newList)}>
				Create New List
			</button>
			{newList && <CreateNewList toggleNewList={setNewList} />}
			{testData.map((item) => (
				<div key={item._id}>
					<h1>{item.name}</h1>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
}

export { Index, loader };
