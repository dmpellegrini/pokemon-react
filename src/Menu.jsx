import './App.css';
import Sprite from './Sprite.jsx'
import Modal from './Modal.jsx'
import { useState } from 'react'

function Menu() {
  const [ modalNum, setModalNum ] = useState(1)
  const [ modalClass, setModalClass ] = useState('Modal-Hide')
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
              <button 
                onClick={() => {
                  return (
                    setModalNum(pokemon),
                    setModalClass('Modal-Show')
                  )
                }
                  
                } 
                key={index}>
                <Sprite pokedexNum={pokemon}/>
              </button>
            )
          })
        }
        <Modal pokedexNum={modalNum} viewClass={modalClass}/>
      </div>

    </div>
  );
}

export default Menu;
