import React, { useState } from 'react'
import AgregarReceta from './components/AgregarReceta'
import './App.css'
import ListadoRecetas from './components/ListadoRecetas'

export const ContextoRecetas = React.createContext({
  recetas: JSON.parse(localStorage.getItem('recetas')),
  setRecetas: () => {}
});

function App() {
  let [recetas, setRecetas] = useState(localStorage.getItem('recetas'))
  if (recetas == null){
    setRecetas([])
  }
  const valor = {recetas, setRecetas}
  return (
    <>
      <ContextoRecetas.Provider value={valor}>
        <AgregarReceta />
        <h1>Mis recetas...</h1>
        <ListadoRecetas />
      </ContextoRecetas.Provider>
    </>
  )
}

export default App
