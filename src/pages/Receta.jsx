import React, { useState } from 'react'
import getReceta from '../functions/getReceta';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { ContextoRecetas } from './Home';
import DetalleReceta from '../components/DetalleReceta';

function Receta(){
  let { recetaId } = useParams()
  let receta = getReceta(recetaId)
  console.log(recetaId)
  return (
    <div className='h-screen'>
      <NavBar/>
      <div className='flex justify-center'>
        <DetalleReceta receta={receta}/>
      </div>
    </div>
  )
}

export default Receta