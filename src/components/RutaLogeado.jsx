import React, {useContext} from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/contextoUsuario"

function RutaLogeado(){
    const {usuario, setUsuario} = useContext(UserContext)
    const logeado = usuario.logeado
    return logeado ? <Outlet/>:<Navigate to='/login'/>
}

export default RutaLogeado
