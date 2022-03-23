import React from 'react'

function Sort() {
  return (
    <div>
        <select className='text-center' name="sort-pokemon" id="sort">
            <option value="">Sort</option>
            <option value="name">Sort By Name</option>
            <option value="id">Sort By ID</option>
        </select>
    </div>
  )
}

export default Sort