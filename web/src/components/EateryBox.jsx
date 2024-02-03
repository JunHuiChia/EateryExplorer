import '../css/list.css';

function DisplayCategoryInformation(data) {
	return (
		<>
			<h2>{data.eatery.name}</h2>
			<p>{data.eatery.description}</p>
			<p>Prices: {data.eatery.price}</p>
			<p>Rating: {data.eatery.rating}</p>
		</>
	);
}

function CategoryBox(data) {
	return <div className='list'>{DisplayCategoryInformation(data)}</div>;
}

export default CategoryBox;
