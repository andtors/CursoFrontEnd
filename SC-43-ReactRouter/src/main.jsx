import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

import App from './App.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Product from './routes/Product.jsx'
import ProductInfo from './routes/ProductInfo.jsx'
import Search from './routes/Search.jsx'

import './index.css'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "products/:id",
        element: <Product />
      },
      {
        path: "products/:id/info",
        element: <ProductInfo />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ]
  },
  /*
  {
    path: "contact",
    element: <Contact />
  },
  */
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
