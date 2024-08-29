import { useState, useContext } from 'react'
import addUsuario from '../functions/addUsuario'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/contextoUsuario'

export default function FormularioRegistro() {
    let [nombre, setNombre] = useState('')
    let [contrasena, setContrasena] = useState('')
    const navigate = useNavigate();
    const {usuario, setUsuario} = useContext(UserContext)


    let handleNombre = (event)=>{
        let valor = event.target.value
        setNombre(valor)
    }

    let handleContrasena = (event)=>{
        let valor = event.target.value
        setContrasena(valor)
    }

    let handleSubmit = async (event) =>{
        event.preventDefault()
        let agregado = await addUsuario(nombre=nombre, contrasena=contrasena)
        if (agregado){
            setUsuario(agregado)
            navigate('/')
        }
    }

    return (
    <>
        <div className='flex justify-center w-full mt-10'>
            <div className='border-2 p-4 px-48 rounded-lg'>
                <h1 className='mb-6'>Registrarse</h1>
                <form onSubmit={handleSubmit}>
                    <div className="">
                    <label className="block text-sm font-medium leading-6">Nombre</label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                            <input onChange={handleNombre} value={nombre} type="text" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    </div>

                    <div className="">
                        <label className="block text-sm font-medium leading-60">Contraseña</label>
                        <div className="mt-2">
                            <input onChange={handleContrasena} value={contrasena} type="password" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    <button className='mt-10'>Registrar</button>
                </form>
            </div>
        </div>
    </>
    )
}

