import { Form, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';

async function action({ request }) {
	const formData = await request.formData();
	const response = await fetch('http://localhost:3000/api/eatery', {
		method: 'POST',
		body: JSON.stringify(Object.fromEntries(formData)),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return await response.json();
}

CreateNewEatery.propTypes = {
	listId: PropTypes.string.isRequired,
	categoryId: PropTypes.string.isRequired,
	toggleNewEatery: PropTypes.func.isRequired,
};

function CreateNewEatery({ listId, categoryId, toggleNewEatery }) {
	const submit = useSubmit();
	function hideNewEatery(event) {
		event.preventDefault();
		toggleNewEatery(false);
		submit(event.currentTarget);
	}

	const action = `/list/${listId}/category/${categoryId}`;

	return (
		<div>
			<Form
				method='post'
				action={action}
				onSubmit={hideNewEatery}
				className='eateryForm'
			>
				<label htmlFor='name'>Name:</label>
				<input type='text' name='name' required />
				<label htmlFor='description'>Description:</label>
				<input type='hidden' name='categoryId' value={categoryId} />
				<input type='text' name='description' required />
				<label htmlFor='price'>Prices:</label>
				<input type='text' name='price' />
				<label htmlFor='rating'>Rating:</label>
				<input type='number' name='rating' />
				<button type='submit'>Create Eatery</button>
			</Form>
		</div>
	);
}

export { action, CreateNewEatery };
