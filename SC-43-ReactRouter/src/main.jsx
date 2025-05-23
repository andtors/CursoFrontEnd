import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import App from './App.jsx'
import Contact from './routes/Contact.jsx'

import './index.css'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />
  },
  {
    path: "contact",
    element: <Contact />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
