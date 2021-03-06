import React from 'react'

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>HP: {pokemon.maxHP}</span>
        <span>CP: {pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {pokemon.attacks.special.slice(0, 3).map((item) => (
          <span key={`${item.name} - ${item.damage}`}>{item.name} </span>
        ))}
      </div>
    </div>
  )
}
