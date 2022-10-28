import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Modal(props) {
  const [ pokeBio, setPokeBio ] = useState('')
  const { pokedexNum } = props
  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`
  const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokedexNum}`
  const bioPokemon = async function () {
    const pokemonRes = await axios(pokemonURL)
    const speciesRes = await axios(speciesURL)
    const offArt = pokemonRes.data.sprites.other['official-artwork'].front_default
    const type = pokemonRes.data.types[0].type.name
    const { name, id, habitat, /*evolves_from_species,*/ is_legendary, is_mythical } = speciesRes.data
    const habitatName = habitat.name
    // const evolution = evolves_from_species.name
    setPokeBio({
      offArt, 
      name,
      id,
      type,
      habitatName,
      // evolution,
    })
  }

  useEffect(() => {bioPokemon()},[pokeBio]) 
  return (
    <div className='Modal'>
      <img id='OffArt' src={pokeBio.offArt} alt=''/>
      <div className='BioBox'>
        <h1>Name: {pokeBio.name}</h1>
        <h1>Pokedex #: {pokeBio.id}</h1>
        <h1>Type: {pokeBio.type}</h1>
        <h1>Habitat: {pokeBio.habitatName}</h1>
        {/* <h1>Evolves From: {pokeBio.evolution}</h1> */}
      </div>
    </div>
  );
}

export default Modal;
