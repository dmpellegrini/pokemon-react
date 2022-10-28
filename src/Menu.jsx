import './App.css';
import Sprite from './Sprite.jsx'
import Modal from './Modal.jsx'
import { useState } from 'react'

function Menu() {
  const [ modalNum, setModalNum ] = useState(1)
  const pokedexStart = 1 
  const pokedexEnd = 151 
  let pokedex = []
  for (let i= pokedexStart-1; i < pokedexEnd; i++) {
    pokedex[i] = i+1
  }

  return (
    <div className='Menu'>
      <div className='SpriteContainer'>
        {
          pokedex.map((pokemon, index) => {
            return (
              <button onClick={() => setModalNum(pokemon)} key={index}>
                <Sprite pokedexNum={pokemon}/>
              </button>
            )
          })
        }
        <Modal pokedexNum={modalNum}/>
      </div>

    </div>
  );
}

export default Menu;
