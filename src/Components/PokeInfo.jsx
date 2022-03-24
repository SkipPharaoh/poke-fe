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
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect //
  useEffect(() => {
    getPokemon();
  }, [pokeID]);

  // Functions //
  const { name, id, height, weight, abilities, types, stats, sprites } =
    pokemon;
  const image = !sprites ? sprites : sprites.other.dream_world.front_default;
  const sprite = !sprites ? sprites : sprites.front_default;

  // Mapping Out Info //
  const pokeAbility = !abilities ? (
    <h1>Loading abilities...</h1>
  ) : (
    abilities.map((info, idx) => <h1 key={idx}> {info.ability.name}</h1>)
  );

  const pokeStats = !stats ? (
    <h1>Stats loading...</h1>
  ) : (
    stats.map((info, idx) => <h1 key={idx}> {info.base_stat} </h1>)
  );

  const pokeType = !types ? (
    <h1>Types loading...</h1>
  ) : (
    types.map((info, idx) => <h1 key={idx}> {info.type.name}</h1>)
  );

  return (
    <div>
      {!pokemon ? (
        <h1>Pokemon loading...</h1>
      ) : (
        <div>
          <div className="text-left">
            <button onClick={() => window.history.back()} className="border rounded-full px-3 bg-blue-500 text-white">Back To Pokédex</button>
          </div>

          <strong className="">{`PokéInfo for pokémon # ${id}`} </strong>

          <div className="">
            <h1 className="">
              {`#${pokeID}`} {name} <img src={sprite} alt={name} />
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

// ```
// This is fthe psuedo code for what needs to be added here

// 1) pokémon = undefined, which is when we are getting the info.
//   - return loading message or screen
//     {pokémon === undefined && "loading..."}
// 2) pokémon = data, which means we got the data we need.
//   - return actual Pokémon info
//     {pokémon !== undefined && pokémon && "Pokémon Info}
// 3) pokémon = bad data or no data.
//   - return Pokémon not found (404 error)
//     {pokémon === false && "Pokémon not found w/ back to all pokemon button"}

// ```
