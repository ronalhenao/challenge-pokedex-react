import { NavLink } from "react-router-dom"
import { Bookmark } from 'lucide-react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/favorites'>
          <Bookmark size={22}/>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}
