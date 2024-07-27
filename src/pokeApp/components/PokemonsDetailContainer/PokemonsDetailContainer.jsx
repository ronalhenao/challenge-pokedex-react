import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import PokemonsDetail from '../PokemonsDetail/PokemonsDetail';

export default function PokemonsDetailContainer() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { pokemonName } = useParams();

  useEffect(() => {
    const fetchPokemon = async() => {
      setLoading(true)

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPokemon(data)

      } catch (error) {
        console.log(error)
        setError("Error al cargar el pokemon");
      }
      finally {
        setLoading(false)
      }
    }

    fetchPokemon()

  }, [pokemonName])
  

  return (
    <>
      {
        loading 
        ? <Spinner />
        : (pokemon && <PokemonsDetail pokemon={pokemon} />) 
      }
    </>
  )
}
