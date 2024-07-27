import { useContext } from 'react';
import { PokemonContext } from '../../context/GlobalContext';
import AppLayout from '../layout/AppLayout';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import Spinner from '../components/Spinner/Spinner';

export default function Home() {
  const { filteredPokemons, loading, error, search } = useContext(PokemonContext);

  // if (error) return <p>Error: {error.message}</p>;

  return (
    <AppLayout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {search.length >= 2 && filteredPokemons.length === 0 ? (
            <div className='message-notFound'>
              <h2>No se encontraron resultados para "{search}"</h2>
            </div>
          ) : (
            <PokemonsList pokemons={filteredPokemons} />
          )}
        </>
      )}
    </AppLayout>
  )
}
