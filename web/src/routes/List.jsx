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
			<h1>{listData.name}</h1>
			<p>This is the list page!</p>
			{listData.category.map((item) => (
				<p key={item._id}>{item.name}</p>
			))}
			<p>{console.log(listData)}</p>
		</div>
	);
}

export { List, loader };
