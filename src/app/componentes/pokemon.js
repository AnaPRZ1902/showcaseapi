"use client";

import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon Info</h1>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Pokemon;
