// IMPORTS //
import { useState } from 'react'

function Search(props) {
  // States //
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();

  // Functions //
  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  const handleSearch = (evt) => {
    // console.log(evt.target.value)
    setSearch(evt.target.value)
    console.log(search)
  }

  return (
    <div>
      {/* Search Bar */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className="px-2 py-1 h-8 border border-solid  border-blue-500 rounded-full text-sm leading-snug text-black bg-blue-100 shadow-none outline-none focus:outline-none focus:w-full font-normal flex-1 border-l-0 placeholder-gray-400 transition duration-300 text-center" placeholder="Who's That Pokémon?" value={search} onChange={handleSearch}/>

      </form>
    </div>
  )
}

export default Search