import { useContext, useState } from 'react'
import addReceta from '../functions/addReceta'
import getRecetas from '../functions/getRecetas'
import { ContextoRecetas } from '../pages/Home'

export default function AgregarReceta() {
    let [nombre, setNombre] = useState('')
    let [descripcion, setDescripcion] = useState('')
    let {recetas, setRecetas} = useContext(ContextoRecetas)

    let handleNombre = (event)=>{
        let valor = event.target.value
        setNombre(valor)
    }

    let handleDescripcion = (event)=>{
        let valor = event.target.value
        setDescripcion(valor)
    }

    let handleSubmit = (event) =>{
        event.preventDefault()
        addReceta(nombre, descripcion)
        setNombre('')
        setDescripcion('')
        setRecetas(getRecetas())
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
                <label className="block text-sm font-medium leading-60">Descripción</label>
                <div className="mt-2">
                    <textarea onChange={handleDescripcion} value={descripcion}  rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                </div>
            </div>
            <button className='mt-10'>Agregar Receta</button>
        </form>
    </>
    )
}

