import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
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
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [value, setValue] = useState("");
  const [tooltipStatus, setTooltipStatus] = useState(0);

  const getAllPokemon = async () => {
    await axios.get(currentPage).then((res) => {
      const { data } = res;
      const { results } = data;

      setNextPage(data.next);

      results.forEach(async (pokemon) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((resp) => {
            const { data } = resp;

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

  const filtered = !allPokemon
    ? "Loading..."
    : allPokemon
        .filter((poke) => poke.types.name === value)
        .map((filteredPoke, idx) => (
          <div className="flex flex-row" key={idx}>
            <div className="flex-col md:flex-row flex items-center md:justify-center">
              {/*Code Block for white tooltip starts*/}
              <div
                className="relative mt-20 md:mt-0 w-full"
                // onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}
              >
                <div className="flex justify-center items-center m-10 p-0 cursor-pointer w-20 h-20 rounded-full border hover:bg-gray-500 hover:w-24 hover:h-24 transition duration-500">
                  <Link to={`/pokemon/${poke.id}`}>
                    <img
                      className="w-16 h-16 hover:w-20"
                      src={filteredPoke.sprites.other.dream_world.front_default}
                      alt={filteredPoke.name}
                    />
                  </Link>
                </div>
                {tooltipStatus === 1 && (
                  <div
                    role="tooltip"
                    className="z-20 -mt-10 w-232 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded-full dark:bg-gray-900 "
                  >
                    <p className="text-sm text-center font-bold text-gray-800 pb-1 dark:text-white">
                      {filteredPoke.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ));

  const filterSelected = (evt) => {
    if (evt.target.value === "all") {
      setValue(undefined);
      console.log(value);
    } else {
      setValue(evt.target.value);
      console.log(allPokemon);
      console.log(value);
    }
  };

  const sortSelected = (evt) => {
    if (evt.target.value === "random") {
      setSort(undefined);
      console.log(sort);
    } else {
      setSort(evt.target.value);
      console.log(sort);
    }
  };

  const poke = allPokemon.map((pokemon, idx) => (
    <PokemonList
      name={pokemon.name}
      image={pokemon.sprites.other.dream_world.front_default}
      id={pokemon.id}
      loading={loading}
      key={idx}
      search={search}
      tooltipStatus={tooltipStatus}
      setTooltipStatus={setTooltipStatus}
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
                  <Search search={search} setSearch={setSearch} />
                </div>

                <div className="mx-5">
                  <Sort sortSelected={sortSelected} />
                </div>

                <div>
                  <Filter filterSelected={filterSelected} />
                </div>
              </div>

              <div className="flex flex-row flex-wrap">
                {!sort ? "nothing..." : sort}
                {!value ? poke : filtered}
                {/* {poke} */}
              </div>

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
