import { useEffect, useState } from "react"
import deleteReceta from "../functions/deleteReceta"
import { useNavigate } from "react-router-dom"
import getReceta from "../functions/getReceta"

export default function DetalleReceta(data){
    let recetaId = data.recetaId
    let [receta, setReceta] = useState([])
    useEffect(() => {
        const fetchReceta = async() =>{
          setReceta(await getReceta(recetaId))
        }
        fetchReceta()
    }, [])

    let navigate = useNavigate()
    
    let handleBorrar = async () =>{
        const response = await deleteReceta(recetaId)
        console.log(response)
        if(response.ok){
            navigate('/list')
        }
    }

    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3">
            <div>
                <img className="rounded-t-lg" src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/ad1c2d62-781e-4585-965a-829798f0b6a6-59f75f76-8629-440a-9fa8-b522e26387b0-chickenparm_America.jpg" alt="" />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{receta.nombre}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{receta.ingredientes}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{receta.pasos}</p>
            </div>
            <button onClick={handleBorrar}>Borrar</button>
        </div>
    )
}