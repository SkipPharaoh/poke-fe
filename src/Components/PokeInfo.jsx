import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firstCharUpperCase } from "../Functions";

function PokeInfo() {
  // States //
  const [pokemon, setPokemon] = useState({});

  // Params //
  const { pokeID } = useParams();

  // ASYNC Fetch //
  const getPokemon = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
      const resp = await fetch(URL);
      const foundPokemon = await resp.json();
      setPokemon(foundPokemon);
      console.log(foundPokemon)
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect //
  useEffect(() => {
    getPokemon();
  }, []);

  // Functions //
  const { name, id, height, weight, abilities, types, stats, sprites } =
    pokemon;
  // const { other } = sprites
  // const { dream_world } = other
  // const { front_default } = dream_world
  const image = !sprites ? sprites : sprites.other.dream_world.front_default

  const pokeAbility = !abilities ? (<h1>Loading abilities...</h1>) : (abilities.map((info, idx) => (<h1 key={idx}> {info.ability.name}</h1>))) ;

  const pokeStats = !stats ? (<h1>Stats loading...</h1>) : stats.map((info, idx) => (<h1 key={idx}> {info.base_stat} </h1>));

  const pokeType = !types ? (<h1>Types loading...</h1>) : types.map((info, idx) => (<h1 key={idx}> {info.type.name}</h1>));

  return (
    <div>
      {!pokemon ? (
        <h1>Pokemon loading...</h1>
      ) : (
        <div>
          <strong className="">{`PokeInfo for pokemon # ${id}`}</strong>

          <div className="">
            <h1 className="">
              {`#${pokeID}`} {name}
            </h1>

            <img src={image} alt={name} />

            <h1> {} </h1>

            <h1> Height: {height * 0.1} m</h1>
            <h1> Weight: {weight * 0.1} kg</h1>

            Types: {pokeType}
            Abilities: {pokeAbility}
            Stats: {pokeStats}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokeInfo;
