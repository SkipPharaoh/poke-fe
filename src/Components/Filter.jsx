import React, {useState} from 'react'

function Filter({allPokemon, filterSelected}) {
  // Props //
  const {types} = allPokemon
  // console.log(!types ? types : types.map((type, idx) => type.name))
  // console.log(allPokemon.name)

  return (
    <div className='flex'>
        <label htmlFor="filterByTypes" className='m-0'><img className='w-5' src="https://img.icons8.com/ios-glyphs/30/000000/filter.png"/></label>
        <select name="filterByTypes" id="filter" placeholder='Filter By Types' onClick={filterSelected}>
            <optgroup label="Filter By Types" >
            <option value="all">All</option>
            <option value="grass">Grass</option>
            <option value="poison">Poison</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="water">Water</option>
            <option value="bug">Bug</option>
            <option value="normal">Normal</option>
            <option value="electric">Electric</option>
            <option value="ground">Ground</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Stell</option>
            <option value="ice">Ice</option>
            <option value="ghost">Ghost</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            </ optgroup >
        </select>

    </div>
  )
}

export default Filter