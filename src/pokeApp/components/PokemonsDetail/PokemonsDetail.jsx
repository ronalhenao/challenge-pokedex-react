import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../../context/GlobalContext';

import { NavLink } from 'react-router-dom'
import { MoveLeft } from 'lucide-react';
import weightIcon from '../../../assets/weight.svg'
import heightIcon from '../../../assets/height.svg'

import './PokemonDetail.css';
import BtnFavorites from '../BtnFavorites/BtnFavorites';

const statNameMapping = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SATK",
  "special-defense": "SDEF",
  speed: "SPD",
};

export default function PokemonsDetail({pokemon}) {
  const [favoriteAdded, setFavoriteAdded] = useState(false)
  const { addFavorite, isInFavorite } = useContext(PokemonContext);

  useEffect(() => {
    // Verifica si el Pokémon ya está en favoritos al montar el componente
    const isFavorite = isInFavorite(pokemon.id);
    setFavoriteAdded(isFavorite);
  }, [isInFavorite, pokemon.id]);

  const handleOnAdd = () => {
    const item = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites?.other?.dream_world?.front_default,
    };

    addFavorite(item);
    setFavoriteAdded(true); // Actualiza el estado para reflejar que se añadió a favoritos
  };

  return (
    <div className='detail'>
      <header className='detail-header'>
        <NavLink to={`/`}><MoveLeft /></NavLink>
        <h1>{pokemon.name}</h1>
        <span>#{String(pokemon.id).padStart(3, '0')}</span>
      </header>
      <figure className='detail-image'>
        {pokemon.sprites && <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />}
      </figure>
      <div className='detail-card'>
        {
          pokemon.types && (
            <ul className='detail-power'>
              {pokemon.types.map(typeInfo => (
                <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
              ))}
            </ul>
          )
        }
        <p className='detail-about'>About</p>
        <div className='detail-wrapper'>
          <div className='detail-wrap'>
            <div className='detail-info'>
              <img src={ weightIcon } alt="weight" />
              <p>{pokemon.weight / 10} kg</p>
            </div>
            <p className='detail-measure'>Weight</p>
          </div>
          <div className='detail-wrap'>
            <div className='detail-info'>
            <img src={ heightIcon } alt="height" />
              <p>{pokemon.height / 10} m</p>
            </div>
            <p className='detail-measure'>Height</p>
          </div>
          <div className='detail-wrap'>
            {pokemon.abilities && (
              <ul className='detail-info move'>
                {pokemon.abilities.map(abilityInfo => (
                  <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
                ))}
              </ul>
            )}
            <p className='detail-measure'>Move</p>
          </div>
        </div>
        <p className='detail-about'>Base Stats</p>
        {pokemon.stats && (
          <div className='stats-wrapper'>
            {pokemon.stats.map(statInfo => (
              <div key={statInfo.stat.name} className='stats-wrap'>
                <p className='stats'>{statNameMapping[statInfo.stat.name] || statInfo.stat.name}</p> 
                <p className='stats-number'>{String(statInfo.base_stat).padStart(3, '0')}</p>
                <progress className='stats-progress' value={ statInfo.base_stat } max="100"></progress>
              </div>
            ))}
          </div>
        )}
      </div>
      {
        favoriteAdded ? (
          <NavLink to='/favorites' className="btn-favorites">Ver favoritos</NavLink>
        ) : (
          <BtnFavorites 
            onAdd={handleOnAdd}  
          />
        )
      }
    </div>
  )
}
