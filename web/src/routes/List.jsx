import { useLoaderData } from 'react-router-dom';
import ListApi from '../apis/ListApi';

async function loader({ params }) {
	console.log(params);
	return await ListApi.getOne(params.id);
}

function List() {
	const listData = useLoaderData();

	return (
		<div>
			<h1>List</h1>
			<p>This is the list page!</p>
			<p>{console.log(listData)}</p>
		</div>
	);
}

export { List, loader };
