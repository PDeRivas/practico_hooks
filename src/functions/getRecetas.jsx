export default function getRecetas(){
    //localStorage.clear()
    let recetas = localStorage.getItem('recetas')
    if (recetas == null){
        recetas = []
    }
    else{
        recetas = JSON.parse(recetas)
    }
    return recetas
}