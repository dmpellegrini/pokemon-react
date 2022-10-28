import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Modal(props) {
  const [ pokeBio, setPokeBio ] = useState('')
  const { pokedexNum, viewClass } = props
  const [ className, setClassName ] = useState('')
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
    setClassName(viewClass)
  }

  const hideModal = function () {
    setClassName("Modal-Hide")
  }

  useEffect(() => {
    bioPokemon()
  },[pokedexNum]) 
  
  return (
    <div className={className}>
    <div id='ArtContainer'>
      <img id='OffArt' src={pokeBio.offArt} alt=''/>
    </div>
      <div className='BioBox'>
        <button onClick={() => hideModal()}>Exit</button>
        <ul>
          <li>Name: {pokeBio.name}</li>
          <li>Pokedex #: {pokeBio.id}</li>
          <li>Type: {pokeBio.type}</li>
          <li>Habitat: {pokeBio.habitatName}</li>
          {/* <h1>Evolves From: {pokeBio.evolution}</h1> */}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
