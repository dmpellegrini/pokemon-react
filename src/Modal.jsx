import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Modal() {
  const [ pokeBio, setPokeBio ] = useState('')
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/2`
  const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/2`
  const bioPokemon = async function () {
    const pokemonRes = await axios(pokemonURL)
    const speciesRes = await axios(speciesURL)
    const offArt = pokemonRes.data.sprites.other['official-artwork'].front_default
    const { name, id, habitat, evolves_from_species, is_legendary, is_mythical } = speciesRes.data
    const habitatName = habitat.name
    const evolution = evolves_from_species.name
    setPokeBio({
      offArt, 
      name,
      id,
      habitatName,
      evolution,
    })
  }

  useEffect(() => {bioPokemon()},[]) 
  return (
    <div>
      <img src={pokeBio.offArt} alt=''/>
      <h1>{pokeBio.name}</h1>
      <h1>{pokeBio.id}</h1>
      <h1>{pokeBio.habitatName}</h1>
      <h1>{pokeBio.evolution}</h1>
      <h1>{pokeBio.evolution}</h1>
    </div>
  );
}

export default Modal;
