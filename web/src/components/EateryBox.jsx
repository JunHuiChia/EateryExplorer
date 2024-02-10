import '../css/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function DisplayCategoryInformation(data) {
	return (
		<>
			<div className='box-data'>
				<h2>{data.eatery.name}</h2>
				<p>{data.eatery.description}</p>
				<p>Prices: {data.eatery.price}</p>
				<p>Rating: {data.eatery.rating}</p>
			</div>
			<div className='box-control'>
				<FontAwesomeIcon
					icon='fa-solid fa-pen-to-square'
					className='fa-icons'
				/>
				<FontAwesomeIcon
					icon='fa-solid fa-square-xmark'
					className='fa-icons'
				/>
			</div>
		</>
	);
}

function EateryBox(data) {
	return <div className='list'>{DisplayCategoryInformation(data)}</div>;
}

export default EateryBox;
