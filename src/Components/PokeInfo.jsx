import React from 'react'
import {useParams} from 'react-router-dom'

function PokeInfo() {
  const {pokeID} = useParams()
  return (
    <div> {`PokeInfo for pokemon # ${pokeID}`}</div>
  )
}

export default PokeInfo