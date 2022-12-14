import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'


function Sprite(props) {
  const [ sprite, setSprite ] = useState('')
  const url = `https://pokeapi.co/api/v2/pokemon/${props.pokedexNum}`
  const catchPokemon = async function () {
    const response = await axios(url)
    const { sprites } = response.data
    setSprite(sprites.front_default)
  }

  useEffect(() => {catchPokemon()},[props.pokemon]) 
  
  return (
      <img src={sprite} alt=''/>
  );
}

export default Sprite;
