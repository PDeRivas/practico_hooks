import { useContext, useEffect } from 'react'
import { ContextoRecetas } from '../context/contextoRecetas'
import TarjetaReceta from './TarjetaReceta'
import getRecetas from '../functions/getRecetas'

export default function ListadoRecetas() {
    let {recetas, setRecetas} = useContext(ContextoRecetas)
    useEffect(() => {
        const fetchRecetas = async() =>{
          setRecetas(await getRecetas())
        }
        fetchRecetas()
      }, [])
      
    return (
    <div className='flex flex-col items-center col-span-4'>
        <h1>Mis recetas</h1>
        {recetas.map((receta) =>{
            return(<TarjetaReceta nombre={receta.nombre} descripcion={receta.descripcion} id={receta.id}/>)
        })}
    </div>
    )
}
