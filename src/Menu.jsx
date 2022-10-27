import './App.css';
import Sprite from './Sprite.jsx'

function Menu() {
  const pokedexStart = 1 
  const pokedexEnd = 151 
  let pokedex = []
  for (let i= pokedexStart-1; i < pokedexEnd; i++) {
    pokedex[i] = i+1
  }

  return (
    <div>
      {
        pokedex.map((pokemon, index) => {
        return <Sprite pokedexNum={pokemon} key={index}/>
        })
      }
    </div>
  );
}

export default Menu;
