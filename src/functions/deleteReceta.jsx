import getRecetas from "./getRecetas"

export default function deleteReceta(id){
    let recetas = getRecetas()
    let recetaBorrar = null
    recetas.forEach((receta) =>{
        if(receta.id == id){
            recetaBorrar = receta
        }
    })
    let indexBorrar = recetas.indexOf(recetaBorrar)
    recetas.splice(indexBorrar, 1)
    
    localStorage.setItem('recetas', JSON.stringify(recetas))
    //localStorage.clear()
}