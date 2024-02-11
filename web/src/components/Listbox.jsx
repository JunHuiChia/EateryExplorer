import '../css/list.css';
import { useNavigate } from 'react-router-dom';

function DisplayListInformation(data) {
	let categories = data.lists.category.length;

	return (
		<div className='box-data'>
			<h2>{data.lists.name}</h2>
			<p>Categories: {categories}</p>
		</div>
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
