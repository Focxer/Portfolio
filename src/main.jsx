import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Projetos } from './pages/'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'projetos',
    element: <Projetos />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
