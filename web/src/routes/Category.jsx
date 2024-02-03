import { useLoaderData } from 'react-router-dom';
import CategoryApi from '../apis/CategoryApi';
import EateryBox from '../components/EateryBox';

let categoryId;

async function loader({ params }) {
	console.log(params);
	categoryId = params.categoryId;
	return await CategoryApi.getOne(categoryId);
}

function Category() {
	const categoryData = useLoaderData();
	console.log('Category Api Data: ', categoryData);

	return (
		<div>
			<h1>Category</h1>
			{categoryData != null &&
				categoryData.eatery.map((eatery) => (
					<EateryBox key={eatery._id} eatery={eatery} />
				))}
		</div>
	);
}

export { Category, loader };
