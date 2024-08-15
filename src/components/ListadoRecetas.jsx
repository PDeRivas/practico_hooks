import { useContext, useEffect, useState } from 'react'
import { ContextoRecetas } from '../App'
import TarjetaReceta from './TarjetaReceta'

export default function ListadoRecetas() {
    let {recetas, setRecetas} = useContext(ContextoRecetas)
    return (
    <div className='flex flex-col items-center col-span-4'>
        <h1>Mis recetas...</h1>
        {JSON.parse(recetas).map((receta) =>{
            return(<TarjetaReceta nombre={receta.nombre} descripcion={receta.descripcion}/>)
        })}
    </div>
    )
}
