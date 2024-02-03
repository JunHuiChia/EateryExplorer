import { useLoaderData } from 'react-router-dom';

let categoryId;

async function loader({ params }) {
	console.log(params);
	categoryId = params.id;
	return true;
}

function Category() {
	const categoryData = useLoaderData();

	return (
		<div>
			<h1>Category</h1>
		</div>
	);
}

export { Category, loader };
