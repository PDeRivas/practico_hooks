export default async function getReceta(id){
    const response = await fetch(`http://localhost:3000/receta/${id}`)
    const data = await (response.json())
    return data[0]
}
