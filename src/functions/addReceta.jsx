export default function addReceta(nombre, descripcion){
    let recetasString = localStorage.getItem('recetas')
    if (!recetasString){
        recetasString = []
    }
    else{
        recetasString = JSON.parse(recetasString)
    }
    
    recetasString.push({
        nombre: nombre,
        descripcion: descripcion,
    })
    
    localStorage.setItem('recetas', JSON.stringify(recetasString))
    //localStorage.clear()
}