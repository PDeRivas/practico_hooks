import { useState } from 'react'
import addReceta from '../functions/addReceta'

export default function ListadoRecetas() {
    let [nombre, setNombre] = useState('')
    let [descripcion, setDescripcion] = useState('')

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
    }

    return (
    <>
        <form onSubmit={''}>
            <label>Nombre</label>
            <input type='text' onChange={handleNombre} value={nombre} />
            <label>Descripcion</label>
            <textarea onChange={descripcionInput} value={descripcion}/>
            <button onClick={handleSubmit}>Agregar Receta</button>
        </form>
    </>
    )
}
