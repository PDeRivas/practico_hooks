import { useContext, useState } from 'react'
import addReceta from '../functions/addReceta'
import getRecetas from '../functions/getRecetas'
import { ContextoRecetas } from '../App'

export default function AgregarReceta() {
    let [nombre, setNombre] = useState('')
    let [descripcion, setDescripcion] = useState('')
    let {recetas, setRecetas} = useContext(ContextoRecetas)

    let handleNombre = (event)=>{
        let valor = event.target.value
        setNombre(valor)
    }

    let descripcionInput = (event)=>{
        let valor = event.target.value
        setDescripcion(valor)
    }

    let handleSubmit = (event) =>{
        event.preventDefault()
        addReceta(nombre, descripcion)
        setRecetas(getRecetas())
    }

    return (
    <>
        <form>
            <label>Nombre</label>
            <input type='text' onChange={handleNombre} value={nombre} />
            <label>Descripcion</label>
            <textarea onChange={descripcionInput} value={descripcion}/>
            <button onClick={handleSubmit}>Agregar Receta</button>
        </form>
    </>
    )
}

