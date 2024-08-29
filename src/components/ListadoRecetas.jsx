import { useContext } from 'react'
import { ContextoRecetas } from '../pages/Home'
import TarjetaReceta from './TarjetaReceta'

export default function ListadoRecetas() {
    let {recetas, setRecetas} = useContext(ContextoRecetas)
    return (
    <div className='flex flex-col items-center col-span-4'>
        <h1>Mis recetas</h1>
        {recetas.map((receta) =>{
            return(<TarjetaReceta nombre={receta.nombre} descripcion={receta.descripcion} id={receta.id}/>)
        })}
    </div>
    )
}
