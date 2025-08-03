import { Link,NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

  return (
    <div>
        <ul>
          {
            /*
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contato</Link></li>
              */
          }

          <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to={"/contact"} >Contatos</NavLink>
        </ul>
        
    </div>
  )
}

export default Navbar