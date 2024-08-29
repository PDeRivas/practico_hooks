import React, { useState } from 'react'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';
import FormularioRegistro from '../components/FormularioRegistro';

function Registrar() {
  return (
    <div className='h-screen'>
      <NavBar/>
      <FormularioRegistro/>
    </div>
  )
}

export default Registrar
