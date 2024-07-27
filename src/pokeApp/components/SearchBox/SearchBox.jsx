import { useContext } from 'react';
import { PokemonContext } from '../../../context/GlobalContext';
import searchIcon from '../../../assets/search.svg';

export default function SearchBox() {
  const { search, handleSearch } = useContext(PokemonContext);
  return (
    <div className="search-wrap">
      <img src={searchIcon} alt="search icon" className="search-icon" />
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar Pokemon"
      />
    </div>
  )
}
