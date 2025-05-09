import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Comentario fora do HTML
createRoot(document.getElementById('root')).render(
  /* Comentario dentro do HTML */
  <StrictMode>
    <App />
  </StrictMode>,
)
