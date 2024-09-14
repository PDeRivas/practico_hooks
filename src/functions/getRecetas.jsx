export default async function getRecetas(){
    const response = await fetch('http://localhost:3000/receta')
    const data = await (response.json())
    return data
}