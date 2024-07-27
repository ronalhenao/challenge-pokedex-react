import { useContext } from "react";
import { PokemonContext } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";
import AppLayout from '../layout/AppLayout'
import PokemonsCard from "../components/PokemonsCard/PokemonsCard";
import Spinner from "../components/Spinner/Spinner";

export default function Favorites() {

  const {filteredFavorites, loading, search} = useContext(PokemonContext);

  return (
    <AppLayout>
      <section className="pokemons-list pokemons-list--favorites">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {search.length >= 2 && filteredFavorites.length === 0 ? (
              <div className="message-notFound">
                <h2>No se encontraron resultados para "{search}".</h2>
              </div>
            ) : filteredFavorites.length > 0 ? (
              filteredFavorites.map((pokemon) => (
                <PokemonsCard key={pokemon.id} pokemon={pokemon} />
              ))
            ) : (
              <div className="message-notFound">
                <h2>No hay Pokémon favoritos agregados aún.</h2>
                <NavLink to='/' className='back-list'>Ver pokémons</NavLink>
              </div>
            )}
          </>
        )}
      </section>
      {filteredFavorites.length > 0 && (
        <div>
          <NavLink to="/" className='back-list'>Ver pokémons</NavLink>
        </div>
      )}
    </AppLayout>
  )
}
