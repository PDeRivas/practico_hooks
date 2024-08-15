import React, { useState } from 'react'
import AgregarReceta from './components/AgregarReceta'
import './App.css'
import ListadoRecetas from './components/ListadoRecetas'
import getRecetas from './functions/getRecetas';

export const ContextoRecetas = React.createContext({
  recetas: JSON.parse(localStorage.getItem('recetas')),
  setRecetas: () => {}
});

function App() {
  let [recetas, setRecetas] = useState(getRecetas())
  
  const valor = {recetas, setRecetas}
  return (
    <div className='h-screen'>
      <ContextoRecetas.Provider value={valor}>
        <div className="grid grid-cols-5">
          <AgregarReceta />
          <ListadoRecetas />
        </div>
      </ContextoRecetas.Provider>
    </div>
  )
}

export default App
