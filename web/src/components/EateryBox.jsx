import '../css/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

library.add(fas);

function DisplayCategoryInformation(data) {
	let navigate = useNavigate();
	function DeleteEatery(eateryId) {
		fetch(import.meta.env.VITE_BASE_URL + '/eatery/' + eateryId, {
			method: 'DELETE',
		})
			.then((response) => {
				console.log(response);
				navigate(0);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return (
		<>
			<div className='box-data'>
				<h2>{data.eatery.name}</h2>
				<p>{data.eatery.description}</p>
				<p>Prices: {data.eatery.price}</p>
				<p>Rating: {data.eatery.rating}</p>
			</div>
			<div className='box-control'>
				{/* <FontAwesomeIcon
					icon='fa-solid fa-pen-to-square'
					className='fa-icons'
				/> */}
				<FontAwesomeIcon
					icon='fa-solid fa-square-xmark'
					className='fa-icons fa-delete'
					onClick={() => DeleteEatery(data.eatery._id)}
				/>
			</div>
		</>
	);
}

function EateryBox(data) {
	return <div className='list'>{DisplayCategoryInformation(data)}</div>;
}

export default EateryBox;
