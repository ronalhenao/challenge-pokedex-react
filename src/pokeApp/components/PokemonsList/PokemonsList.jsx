import PokemonsCard from '../PokemonsCard/PokemonsCard'

export default function PokemonsList({ pokemons }) {
  return (
    <section className='pokemons-list'>
      {
        pokemons?.map((pokemon) => (
          <PokemonsCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))
      }
    </section>
  )
}
