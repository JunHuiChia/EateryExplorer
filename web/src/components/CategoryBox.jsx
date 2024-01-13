import '../css/list.css';
import { useNavigate } from 'react-router-dom';

function DisplayListInformation(data) {
	let eateries = data.category.eatery.length;

	return (
		<>
			<h2>{data.category.name}</h2>
			<p>Eateries: {eateries}</p>
		</>
	);
}

function CategoryBox(data) {
	const navigate = useNavigate();
	return (
		<div
			className='list'
			onClick={() => navigate(`category/${data.category._id}`)}
		>
			{DisplayListInformation(data)}
		</div>
	);
}

export default CategoryBox;
