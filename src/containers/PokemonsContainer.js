import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'

const GET_POKEMONS = 1

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  })

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  )
}
