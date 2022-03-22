import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import {useState, useEffect} from 'react'
import PokemonList from './Components/PokemonList';
import axios from 'axios'

function App() {
  // States //
  const [pokemon, setPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  const [previousPage, setPreviousPage] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [loading, setLoading] = useState(true)


  const getAllPokemon = async () => {
    const res = await axios.get(currentPage).then(res => {
      const data = res.data

      setPreviousPage(data.previous)
      setNextPage(data.next)
      console.log(data)
    
      const createPokemon = (result) => {
        result.forEach( async (pokemon) => {
          const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(resp => {
            const data = resp.data
            setAllPokemon(currentList => [...currentList, data])
            // setAllPokemon(data)
            // allPokemon.push(data)
          })
          
        })
      }
      createPokemon(data.results)
      
    })
    
    console.log(allPokemon)
  }


  // UseEFFECT //
  useEffect(() => {
    getAllPokemon()
    setLoading(true)
  }, [currentPage])

  // Functions //
  const toNextPage = () => {
    setCurrentPage(nextPage)
  }

  const toPreviousPage = () => {
    setCurrentPage(previousPage)
  }


  const poke = allPokemon.map((pokemon, idx) => 
    (<PokemonList name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default} loading={loading}
    toNextPage={nextPage ? toNextPage : null} 
    toPreviousPage={previousPage ? toPreviousPage : null} key={idx}  />
    )
  )


  return (
    <div className="App">

      {/* HEADER */}
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/pokemon' element={
          <div>
            <div className='flex flex-row flex-wrap'>
              {poke}
            </div>
            <div className='my-10'>
              <button onClick={toNextPage}>Load More</button>
            </div>
          </div>
          } />
      </Routes>
    </div>
  );
}

export default App;
