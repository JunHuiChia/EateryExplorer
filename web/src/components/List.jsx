import '../css/list.css';

function DisplayListInformation(data) {
	let category = data.lists.category;
	if (category.length === 0) category = 'No categories';

	return (
		<>
			<h2>{data.lists.name}</h2>
			<p>{category}</p>
		</>
	);
}

function List(data) {
	return <div className='list'>{DisplayListInformation(data)}</div>;
}

export { List };
