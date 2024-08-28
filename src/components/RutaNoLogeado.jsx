import React, {useContext} from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/contextoUsuario"

function RutaNoLogeado(){
    const {usuario, setUsuario} = useContext(UserContext)
    const logeado = usuario.logeado
    return !logeado ? <Outlet/>:<Navigate to='/'/>
}

export default RutaNoLogeado
