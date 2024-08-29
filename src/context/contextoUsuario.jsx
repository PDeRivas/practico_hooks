import React, {createContext, useState} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    let usuarioLogeado =  sessionStorage.getItem('usuario')
    if (usuarioLogeado == null){
        usuarioLogeado = {logeado: false}
    }
    else{
        usuarioLogeado = JSON.parse(usuarioLogeado)
    }
    const [usuario, setUsuario] = useState(usuarioLogeado)

    const valores = { usuario, setUsuario } 
    return(
        <UserContext.Provider value={valores}>
            {children}
        </UserContext.Provider>
    )
}