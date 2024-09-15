import React, { useState } from 'react'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';
import AgregarReceta from '../components/AgregarReceta';
import { ContextoRecetas } from '../context/contextoRecetas';

function Agregar() {
  let [recetas, setRecetas] = useState(getRecetas())
  
  const valor = {recetas, setRecetas}
  return (
    <div className='h-screen'>
      <NavBar/>
      <ContextoRecetas.Provider value={valor}>
        <div>
          <AgregarReceta />
        </div>
      </ContextoRecetas.Provider>
    </div>
  )
}

export default Agregar