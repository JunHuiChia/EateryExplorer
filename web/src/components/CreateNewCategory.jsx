import { Form, useSubmit } from 'react-router-dom';
import PropTypes from 'prop-types';

async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const listId = formData.get('listId');
	const response = await fetch('http://localhost:3000/api/category', {
		method: 'POST',
		body: JSON.stringify({ name: name, listId: listId }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	return result;
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
