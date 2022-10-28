import Menu from './Menu.jsx'
import Modal from './Modal.jsx'
import './App.css';
import { useState, useEffect } from 'react'


function App() {
  useEffect(() => {

  }, [])
  return (
    <div>
      <header className='Header'>
        <h1>Gotta Catch 'Em All</h1>
      </header>
      <div>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
