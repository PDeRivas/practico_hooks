import React, {createContext, useEffect} from "react";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)

    return(
        <UserContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UserContext.Provider>
    )
}