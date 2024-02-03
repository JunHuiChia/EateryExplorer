import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './css/index.css';
import './css/handdrawn.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { action as rootAction } from './components/CreateNewList.jsx';
import { action as listAction } from './components/CreateNewCategory.jsx';
import { action as categoryAction } from './components/CreateNewEatery.jsx';

import { Index, loader as rootLoader } from './routes/Index.jsx';
import { List, loader as listLoader } from './routes/List.jsx';
import { Category, loader as categoryLoader } from './routes/Category.jsx';

import FriendsList from './routes/FriendsList.jsx';
import Error from './components/Error.jsx';

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
			{
				path: 'list/:id',
				element: <List />,
				loader: listLoader,
				action: listAction,
			},
			{
				path: 'list/:id/category/:categoryId',
				element: <Category />,
				loader: categoryLoader,
				action: categoryAction,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
