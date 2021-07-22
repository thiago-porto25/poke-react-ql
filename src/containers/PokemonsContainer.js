/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/getPokemons'
import Fuse from 'fuse.js'

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  })
  const [pokeList, setPokeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => setPokeList(pokemons), [pokemons])

  useEffect(() => {
    const fuse = new Fuse(pokeList, { keys: ['name'] })

    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (pokeList.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setPokeList(results)
    } else {
      setPokeList(pokemons)
    }
  }, [searchTerm])

  return (
    <>
      <div className="searchContainer">
        <input
          className="search"
          value={searchTerm}
          type="text"
          placeholder="Search a Pokemon..."
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </div>

      <div className="container">
        {pokeList &&
          pokeList.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  )
}
