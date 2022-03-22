import React from 'react'

function SearchContainer() {
  return (
    <div>
        
        {/* Search Bar */}
        <div className="sm:w-7/12 md:w-5/12 px-4 flex-wrap text-right items-stretch md:m-auto">
            <input type="text" className="px-2 py-1 h-8 border border-solid  border-blue-500 rounded-full text-sm leading-snug text-black bg-blue-100 shadow-none outline-none focus:outline-none focus:w-full font-normal flex-1 border-l-0 placeholder-gray-400 transition duration-300" placeholder="Who's That Pokémon?" />
        </div>
    </div>
  )
}

export default SearchContainer