import { useContext, useState } from 'react'
import addReceta from '../functions/addReceta'
import getRecetas from '../functions/getRecetas'
import { ContextoRecetas } from '../context/contextoRecetas'
import { useNavigate } from 'react-router-dom'

export default function AgregarReceta() {
    let [nombre, setNombre] = useState('')
    let [ingredientes, setIngredientes] = useState('')
    let [pasos, setPasos] = useState('')
    let {recetas, setRecetas} = useContext(ContextoRecetas)

    let navigate = useNavigate()

    let handleNombre = (event)=>{
        let valor = event.target.value
        setNombre(valor)
    }

    let handleIngredientes = (event)=>{
        let valor = event.target.value
        setIngredientes(valor)
    }

    let handlePasos = (event)=>{
        let valor = event.target.value
        setPasos(valor)
    }

    let handleSubmit = (event) =>{
        event.preventDefault()
        let response = addReceta(nombre, ingredientes, pasos)
        console.log(response)
        if (response){
            setRecetas(getRecetas())
            navigate('/list')
        }
        
    }

    return (
    <>
    <div className='flex justify-center w-full mt-10'>
            <div className='border-2 p-4 px-48 rounded-lg'>
                <h1 className='mb-6'>Agregar Receta</h1>
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
                        <label className="block text-sm font-medium leading-60">Ingredientes</label>
                        <div className="mt-2">
                            <textarea onChange={handleIngredientes} value={ingredientes}  rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>

                    <div className="">
                        <label className="block text-sm font-medium leading-60">Pasos</label>
                        <div className="mt-2">
                            <textarea onChange={handlePasos} value={pasos}  rows="3" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    <button className='mt-10'>Agregar Receta</button>
                </form>
            </div>
        </div>
    </>
    )
}

