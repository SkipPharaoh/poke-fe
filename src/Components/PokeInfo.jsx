import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firstCharUpperCase } from "../utils/Functions";

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
    abilities.map((info, idx) => (
      <h1 key={idx}>
        {info.is_hidden === true ? "Hidden: " : "Normal: "}
        {info.ability.name}
      </h1>
    ))
  );

  !types ? console.log("isHidden") : console.log(types);

  const pokeStats = !stats ? (
    <h1>Stats loading...</h1>
  ) : (
    stats.map((info, idx) => (
      <h1 key={idx}>
        {firstCharUpperCase(info.stat.name)}: {info.base_stat}{" "}
      </h1>
    ))
  );

  const pokeType = !types ? (
    <h1>Types loading...</h1>
  ) : (
    types.map((info, idx) => <h1 key={idx}> {info.type.name}</h1>)
  );

  return (
    <div className="pb-10">
      {!pokemon ? (
        <h1>Pokemon loading...</h1>
      ) : (
        <div>
          <div className="text-left">
            <button
              onClick={() => window.history.back()}
              className="border rounded-full px-3 bg-blue-500 text-white"
            >
              Back To Pokédex
            </button>
          </div>

          <div className="flex flex-col">
            <strong className="text-2xl">{`PokéInfo for pokémon # ${id}`}</strong>
          </div>


          <div className="">
            <div className="flex justify-center">
              <h1 className="">
                {`#${pokeID}`} {name} 
                <img src={sprite} alt={name} />
              </h1>
            </div>

            <div className="flex">
              <img src={image} alt={name} />
            </div>

            <div className="">
              <h1> <u>Height:</u> {(height * 0.1).toFixed(2)} m</h1>
              <h1> <u>Weight:</u> {(weight * 0.1)} kg</h1>
            </div>

            <div className="">
              <u>Types:</u> {pokeType}
            </div>

            <div className="">
              <u>Abilities:</u> {pokeAbility}
            </div>

            <div className="">
              <u>Stats:</u> {pokeStats}
            </div>

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
