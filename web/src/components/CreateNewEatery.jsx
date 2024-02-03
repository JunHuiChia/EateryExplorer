import { Form, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';

async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const categoryId = formData.get('categoryId');
	const response = await fetch('http://localhost:3000/api/eatery', {
		method: 'POST',
		body: JSON.stringify({ name: name, categoryId: categoryId }),
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
			<Form method='post' action={action} onSubmit={hideNewEatery}>
				<label>
					Name:
					<input type='text' name='name' required />
					<input type='hidden' name='categoryId' value={categoryId} />
				</label>
				<button type='submit'>Create Eatery</button>
			</Form>
		</div>
	);
}

export { action, CreateNewEatery };
