import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <div className="app">
      <Navbar />
      <SearchForm />
      <Outlet />
    </div>
  )
}

export default App
