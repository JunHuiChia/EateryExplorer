function DisplayListInformation(data) {
	let category = data.lists.category;
	if (category.length === 0) category = 'No categories';

	return (
		<>
			<h1>{data.lists.name}</h1>
			<h2>{category}</h2>
		</>
	);
}

function List(data) {
	return <div>{DisplayListInformation(data)}</div>;
}

export { List };
