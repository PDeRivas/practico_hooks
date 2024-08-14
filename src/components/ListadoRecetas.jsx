import { useContext, useEffect, useState } from 'react'
import { ContextoRecetas } from '../App'

export default function ListadoRecetas() {
    let {recetas, setRecetas} = useContext(ContextoRecetas)
    setRecetas(()=>JSON.parse(useContext(ContextoRecetas)))
    useEffect(()=>{
        setRecetas(() => JSON.parse(useContext(ContextoRecetas)))
    },[])
    
    return (
    <>
        {recetas.map((receta) =>{
            return(<div>
                <h3>{receta.nombre}</h3>
                <p>{receta.descripcion}</p>
            </div>)
        })}
    </>
    )
}
