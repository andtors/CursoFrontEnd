import './App.css'

import Navbar from "./components/Navbar"

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Navbar />
      <h1>Hooks React</h1>
      <Outlet />
    </div>
  )
}

export default App
