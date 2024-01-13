import { useLoaderData } from 'react-router-dom';
import ListApi from '../apis/ListApi';
import CategoryBox from '../components/CategoryBox';

async function loader({ params }) {
	console.log(params);
	var test = await ListApi.getOne(params.id);
	console.log('test', test);
	return test;
}

function List() {
	const listData = useLoaderData();
	console.log('List: ', listData);

	return (
		<div>
			<h1>{listData.name}</h1>
			<h2>Categories:</h2>
			{listData != null &&
				listData.category.map((category) => (
					<CategoryBox key={category._id} category={category} />
				))}
		</div>
	);
}

export { List, loader };
