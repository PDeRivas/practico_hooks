import React, { useState } from 'react'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';
import FormularioLogin from '../components/FormularioLogin';

function Login() {
  let [recetas, setRecetas] = useState(getRecetas())
  
  const valor = {recetas, setRecetas}
  return (
    <div className='h-screen'>
      <NavBar/>
      <FormularioLogin/>
    </div>
  )
}

export default Login