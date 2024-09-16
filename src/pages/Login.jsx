import React, { useState, useEffect } from 'react'
import getRecetas from '../functions/getRecetas';
import NavBar from '../components/NavBar';
import FormularioLogin from '../components/FormularioLogin';

function Login() {
  let [recetas, setRecetas] = useState(getRecetas())
  useEffect(() => {
    fetch('https://pderivas.pythonanywhere.com/api/autos/')
      .then(response => {
        response.json()
        console.log(response)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const valor = {recetas, setRecetas}
  
  return (
    <div className='h-screen'>
      <NavBar/>
      <FormularioLogin/>
    </div>
  )
}

export default Login