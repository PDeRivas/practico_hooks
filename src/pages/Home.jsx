import React, { useState } from 'react'
import AgregarReceta from '../components/AgregarReceta'
import ListadoRecetas from '../components/ListadoRecetas'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';

export const ContextoRecetas = React.createContext({
  recetas: JSON.parse(localStorage.getItem('recetas')),
  setRecetas: () => {}
});

function Home() {
  let [recetas, setRecetas] = useState(getRecetas())
  
  const valor = {recetas, setRecetas}
  return (
    <div className='h-screen'>
      <NavBar/>
      <h1>Bienvenido al Recetario</h1>
    </div>
  )
}

export default Home
