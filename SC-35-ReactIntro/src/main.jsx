import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx';
import "bootstrap/dist/js/bootstrap.bundle.min";  
import "bootswatch/dist/brite/bootstrap.min.css"

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
)
