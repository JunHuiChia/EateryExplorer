function getEatery() {
	fetch('http://localhost:3000/eatery')
		.then((data) => data.json())
		.then((data) => {
			console.log(data);
		});
}

function Index() {
	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to the home page!</p>
			<button onClick={getEatery}>Get Eatery</button>
		</div>
	);
}

export default Index;
