import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listado from './pages/Listado'
import Agregar from './pages/Agregar'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import { UserProvider } from './context/contextoUsuario'

function App() {
  let [usuario, setUsuario] = useState()
  let [logeado, setLogeado] = useState(false)

  let UsuarioContexto = {usuario, logeado, setLogeado}
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<Listado/>}/>
          <Route path='/add' element={<Agregar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registrar/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
