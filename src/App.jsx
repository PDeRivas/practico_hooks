import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listado from './pages/Listado'
import Agregar from './pages/Agregar'
import { ContextoUsuario } from './context/contextoUsuario'

function App() {
  let [usuario, setUsuario] = useState()
  let [logeado, setLogeado] = useState(false)

  let UsuarioContexto = {usuario, logeado, setLogeado}
  return (
    <ContextoUsuario.Provider value={UsuarioContexto}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<Listado/>}/>
          <Route path='/add' element={<Agregar/>}/>
        </Routes>
      </BrowserRouter>
    </ContextoUsuario.Provider>
  )
}

export default App
