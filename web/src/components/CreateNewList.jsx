import { Form, useSubmit } from 'react-router-dom';

async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const userId = JSON.parse(localStorage.getItem('userId'));
	const response = await fetch(import.meta.env.VITE_BASE_URL + '/list', {
		method: 'POST',
		body: JSON.stringify({ name: name, userId: userId }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	return result;
}

function CreateNewList({ toggleNewList }) {
	const submit = useSubmit();
	function hideNewList(event) {
		event.preventDefault();
		toggleNewList(false);
		submit(event.currentTarget);
	}

	return (
		<div>
			<Form method='post' action='/?index' onSubmit={hideNewList}>
				<label>
					Name:
					<input type='text' name='name' required />
				</label>
				<button type='submit'>Create List</button>
			</Form>
		</div>
	);
}

export { action, CreateNewList };
