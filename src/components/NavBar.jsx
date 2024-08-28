import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/contextoUsuario"
import logout from "../functions/logout"
import { useLocation, useNavigate } from "react-router-dom"

function NavBar(){
    let navigate = useNavigate()
    const {usuario, setUsuario} = useContext(UserContext)
    const location = useLocation()
    const [logeo, setLogeo] = useState(<div></div>)

    useEffect(()=>{
        const logeoContent = usuario.logeado ?
        <div>
            <button onClick={() =>{
                setUsuario(logout())
                navigate('/login')
                }}>Logout</button>
        </div>:
        <div>
            <button onClick={() => navigate('/login')} className="mr-5">Logearse</button>
            <button onClick={() => navigate('/register')}>Registrarse</button>
        </div>
        setLogeo(logeoContent)
        }, [usuario, navigate, location])
        
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Comidas Bien Ricas</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href={usuario.logeado ? "/add":"/login"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Agregar Receta
                            </a>
                        </li>
                        <li>
                            <a href={usuario.logeado ? "/list":"/login"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Listado de Recetas
                            </a>
                        </li>
                    </ul>
                </div>
                {logeo}
                {usuario.logeado ? `Hola ${usuario.nombre}`: ''}
            </div>
        </nav>
    )
}

export default NavBar
