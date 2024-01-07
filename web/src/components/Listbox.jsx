import '../css/list.css';
import { useNavigate } from 'react-router-dom';

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

function ListBox(data) {
	const navigate = useNavigate();
	return (
		<div
			className='list'
			onClick={() => navigate(`list/${data.lists._id}`)}
		>
			{DisplayListInformation(data)}
		</div>
	);
}

export default ListBox;
