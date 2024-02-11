import { Form, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';

async function action({ request }) {
	const formData = await request.formData();
	const response = await fetch(import.meta.env.VITE_BASE_URL + '/category', {
		method: 'POST',
		body: JSON.stringify(Object.fromEntries(formData)),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return await response.json();
}

CreateNewCategory.propTypes = {
	listId: PropTypes.string.isRequired,
	toggleNewCategory: PropTypes.func.isRequired,
};

function CreateNewCategory({ listId, toggleNewCategory }) {
	const submit = useSubmit();
	function hideNewCategory(event) {
		event.preventDefault();
		toggleNewCategory(false);
		submit(event.currentTarget);
	}

	const action = `/list/${listId}`;

	return (
		<div>
			<Form method='post' action={action} onSubmit={hideNewCategory}>
				<label>
					Name:
					<input type='text' name='name' required />
					<input type='hidden' name='listId' value={listId} />
				</label>
				<button type='submit'>Create Category</button>
			</Form>
		</div>
	);
}

export { action, CreateNewCategory };
