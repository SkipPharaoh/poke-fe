import React from 'react'

function Sort({sortSelected}) {
  return (
    <div className='flex'>
        <label htmlFor="sort-pokemon"><img className='w-5' src="https://img.icons8.com/ios-glyphs/30/000000/sort.png"/></label>
        <select className='' name="sort-pokemon" id="sort" onClick={sortSelected} >
          <optgroup label='Sort Pokémon'>
            <option value="random">Sort Randomly</option>
            <option value="name">Sort By Name</option>
            <option value="id">Sort By ID</option>
          </optgroup>
        </select>
    </div>
  )
}

export default Sort