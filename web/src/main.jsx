import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './css/index.css'
import './css/handdrawn.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Index from './routes/Index.jsx'
import Error from './components/Error.jsx'
import FriendsList from './routes/FriendsList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'friends',
        element: <FriendsList />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
