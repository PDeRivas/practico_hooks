export default function addReceta(nombre, descripcion){
    //localStorage.clear()
    let recetasString = localStorage.getItem('recetas')
    let lastId = 0
    let recetasJson = []
    if (!recetasString || recetasString == '[]'){
        lastId = 1
    }
    else{
        recetasJson = JSON.parse(recetasString)
        lastId = recetasJson[recetasJson.length-1].id + 1
    }
    recetasJson.push({
        id: lastId,
        nombre: nombre,
        descripcion: descripcion,
    })
    
    localStorage.setItem('recetas', JSON.stringify(recetasJson))
    
}