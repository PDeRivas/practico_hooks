export default function getReceta(id){
    let recetas = localStorage.getItem('recetas')
    let recetaEncontrada = null

    if (recetas == null){
        recetas = []
    }

    else{ 
        recetas = JSON.parse(recetas)
        recetas.forEach((receta)=>{
            if (receta.id == id){
                recetaEncontrada = receta
            }
        })
    }
    return recetaEncontrada
}