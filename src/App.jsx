import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listado from './pages/Listado'
import Agregar from './pages/Agregar'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import { UserProvider } from './context/contextoUsuario'
import RutaLogeado from './components/RutaLogeado'
import RutaNoLogeado from './components/RutaNoLogeado'
import Receta from './pages/Receta'

function App() {
  let [usuario, setUsuario] = useState()
  let [logeado, setLogeado] = useState(false)

  let UsuarioContexto = {usuario, logeado, setLogeado}
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

          {/* Rutas solo accesibles para un usuario sin logear */}
          <Route element={<RutaNoLogeado/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registrar/>}/>
          </Route>

          {/* Rutas solo accesibles para un usuario logeado */}
          <Route element={<RutaLogeado/>}>
            <Route path='/list' element={<Listado/>}/>
            <Route path='/add' element={<Agregar/>}/>
            <Route path='/receta/:recetaId' element={<Receta/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
