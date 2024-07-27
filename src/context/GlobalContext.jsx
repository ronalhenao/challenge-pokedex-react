import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
        const data = await response.json();
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetails = await fetch(pokemon.url);
            return pokemonDetails.json();
          })
        );
        // ordena alfabeticamente
        detailedPokemons.sort((a, b) => a.name.localeCompare(b.name));
        setPokemons(detailedPokemons);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const addFavorite = (item) => {
    if (!isInFavorite(item.id)) {
      setFavorites(prev => {
        const updatedFavorites = [...prev, item];
        // Guarda los favoritos en el Local Storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } else {
      console.log('El pokemon ya fue agregado a favoritos');
    }
  }

  const isInFavorite = (id) => {
    return favorites.some(pokemons => pokemons.id === id)
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
      setSearch(value);
    }
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    search.length >= 2
      ? pokemon.name.toLowerCase().includes(search.toLowerCase())
      : true
  );

  const filteredFavorites = favorites.filter(pokemon =>
    search.length >= 2
      ? pokemon.name.toLowerCase().includes(search.toLowerCase())
      : true
  );

  return (
    <PokemonContext.Provider value={{
      pokemons,
      favorites,
      addFavorite,
      search,
      handleSearch,
      filteredPokemons,
      filteredFavorites,
      loading,
      error,
      isInFavorite,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}