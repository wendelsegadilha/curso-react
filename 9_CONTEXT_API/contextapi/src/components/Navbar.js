import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/one">Page One</NavLink></li>
            <li><NavLink to="/two">Page Two</NavLink></li>
            <li><NavLink to="/three">Page Three</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar