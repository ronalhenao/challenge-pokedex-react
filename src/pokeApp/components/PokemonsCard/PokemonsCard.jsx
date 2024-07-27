import { NavLink } from 'react-router-dom';

export default function PokemonsCard({pokemon}) {

  const {id, name, image, sprites} = pokemon;

  const imgSrc = image || sprites?.other?.dream_world?.front_default || sprites?.front_default;

  return (
    <NavLink to={`/pokemon/${name}`}>
      <div className="list-item">
        <div className="list-number">
          <span>#{String(id).padStart(3, '0')}</span>
        </div>
        <figure className='list-image'>
          <img src={imgSrc} alt={name} />
        </figure>
        <div className='list-name'>
          <h3>{name}</h3>
        </div>
      </div>
    </NavLink>
  )
}
