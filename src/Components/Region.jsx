import React from 'react'

function Region({ regionSelected }) {
  return (
    <div className='flex'>
        <label htmlFor="region"></label>
        <select name="region" id="region" onChange={regionSelected} >
            <optgroup label='Region'>
                <option value="gen 1">Kanto</option>
                <option value="gen 2">Johto</option>
                <option value="gen 3">Hoenn</option>
                <option value="gen 4">Sinnoh</option>
                <option value="gen 5">Unova</option>
                <option value="gen 6">Kalos</option>
                <option value="gen 7">Alola</option>
                <option value="gen 8">Galar</option>
                <option value="others">Other Variations</option>
            </optgroup>
        </select>
    </div>
  )
}

export default Region