import { Form, useSubmit } from 'react-router-dom';

async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const response = await fetch('http://localhost:3000/eatery', {
		method: 'POST',
		body: JSON.stringify(name),
	});
	const result = await response.json();
	console.log(result);
	return result;
}

function CreateNewList({ toggleNewList }) {
	const submit = useSubmit();
	function hideNewList(event) {
		toggleNewList(false);
		submit(event.currentTarget);
	}

	return (
		<div>
			<Form method='post' action='/?index'>
				<label>
					Name:
					<input type='text' name='name' required />
				</label>
				<button type='submit' onClick={(event) => hideNewList(event)}>
					Create List
				</button>
			</Form>
		</div>
	);
}

export { action, CreateNewList };
