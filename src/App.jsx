import "./App.css";
import { Route, Routes, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import axios from "axios";
import Games from "./Components/Games";
import Locations from "./Components/Locations";
import Sort from "./Components/Sort";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import PokeInfo from "./Components/PokeInfo";

function App() {
  // States //
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(true);

  const getAllPokemon = async () => {
    const res = await axios.get(currentPage).then((res) => {
      const { data } = res;
      const { results } = data;

      setNextPage(data.next);

      results.forEach(async (pokemon) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((resp) => {
            const { data } = resp
            
            setAllPokemon((currentList) => [...currentList, data]);
          });
      });
    });
  };

  // UseEFFECT //
  useEffect(() => {
    getAllPokemon();
    setLoading(true);
  }, [currentPage]);

  // Functions //
  const toNextPage = () => {
    setCurrentPage(nextPage);
  };


  const poke = allPokemon.map((pokemon, idx) => (
    <PokemonList
      name={pokemon.name}
      image={pokemon.sprites.other.dream_world.front_default}
      id={pokemon.id}
      loading={loading}
      key={idx}
    />
  ));

  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          exact
          path="/pokemon"
          element={
            <div>
              <div className="flex justify-center align-middle">
                <div>
                  <Search />
                </div>

                <div className="mx-5">
                  <Sort />
                </div>

                <div>
                  <Filter />
                </div>
              </div>
              <div className="flex flex-row flex-wrap">{poke}</div>
              <div className="my-10">
                <button onClick={toNextPage}>Load More</button>
              </div>
            </div>
          }
        />

        <Route exact path="/pokemon/:pokeID" element={<PokeInfo />} />

        <Route exact path="/games" element={<Games />} />

        <Route exact path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
