export default function getRecetas(){
    //localStorage.clear()
    let recetas = localStorage.getItem('recetas')
    if (recetas == null){
        recetas = []
    }
    return recetas
}