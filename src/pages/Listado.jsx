import React, { useState } from 'react'
import ListadoRecetas from '../components/ListadoRecetas'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';

export const ContextoRecetas = React.createContext({
  recetas: JSON.parse(localStorage.getItem('recetas')),
  setRecetas: () => {}
});

function Listado() {
  let [recetas, setRecetas] = useState(getRecetas())
  
  const valor = {recetas, setRecetas}
  return (
    <div className='h-screen'>
      <NavBar/>
      <ContextoRecetas.Provider value={valor}>
        <div>
          <ListadoRecetas />
        </div>
      </ContextoRecetas.Provider>
    </div>
  )
}

export default Listado