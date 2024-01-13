import '../css/list.css';
import { useNavigate } from 'react-router-dom';

function DisplayListInformation(data) {
	let eatery = data.category.eatery;
	if (eatery.length === 0) eatery = 'No eateries';

	return (
		<>
			<h2>{data.category.name}</h2>
			{eatery !== 'No eateries' && <p>Eateries: {eatery.length}</p>}
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
