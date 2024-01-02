import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './css/index.css';
import './css/handdrawn.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './components/Error.jsx';
import FriendsList from './routes/FriendsList.jsx';

import { action as rootAction } from './components/CreateNewList.jsx';
import { Index, loader as rootLoader } from './routes/Index.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: rootLoader,
				action: rootAction,
			},
			{
				path: 'friends',
				element: <FriendsList />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
