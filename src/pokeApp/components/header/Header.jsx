import { NavLink } from "react-router-dom"
import NavBar from '../Navbar/NavBar';
import SearchBox from "../SearchBox/SearchBox";
import pokeball from '../../../assets/pokeball.svg'
import './Header.css';

export default function Header() {
  return (
    <header className="header home">
      <div className='header-logoNav'>
          <NavLink to='/' className='logo'>
            <img src={pokeball} alt="pokeball" />
            <h1>Pokedex</h1>
          </NavLink>
        <NavBar />
      </div>
      <div className="search-wrapper">
        <SearchBox />
      </div>
    </header>
  )
}
