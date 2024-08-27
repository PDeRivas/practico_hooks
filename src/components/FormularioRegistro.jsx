import { useContext, useState } from 'react'
import addUsuario from '../functions/addUsuario'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function FormularioRegistro() {
    let [nombre, setNombre] = useState('')
    let [contrasena, setContrasena] = useState('')
    const navigate = useNavigate();

    let handleNombre = (event)=>{
        let valor = event.target.value
        setNombre(valor)
    }

    let handleContrasena = (event)=>{
        let valor = event.target.value
        setContrasena(valor)
    }

    let handleSubmit = (event) =>{
        event.preventDefault()
        let agregado = addUsuario(nombre=nombre, contrasena=contrasena)
        console.log(agregado)
        if (agregado){
            console.log('xdxdxd')
            navigate('/')
        }
    }

    return (
    <>
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
            <button className='mt-10'>Agregar Receta</button>
        </form>
    </>
    )
}

