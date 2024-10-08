import { useContext } from "react"
import deleteReceta from "../functions/deleteReceta"
import { ContextoRecetas } from "../context/contextoRecetas"
import getRecetas from "../functions/getRecetas"
import { useNavigate } from "react-router-dom"

export default function TarjetaReceta(data){
    let {recetas, setRecetas} = useContext(ContextoRecetas)
    let nombre = data.nombre
    let descripcion = data.descripcion
    let id = data.id
    let navigate = useNavigate()

    let handleBorrar = async () =>{
        const response = await deleteReceta(id)
        if(response.ok){
            window.location.reload();
        }
    }

    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3">
            <a href={`/receta/${id}`}>
                <img className="rounded-t-lg" src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/ad1c2d62-781e-4585-965a-829798f0b6a6-59f75f76-8629-440a-9fa8-b522e26387b0-chickenparm_America.jpg" alt="" />
            </a>
            <div className="p-5">
                <div href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
            </div>
            <button onClick={handleBorrar}>Borrar</button>
        </div>
    )
}