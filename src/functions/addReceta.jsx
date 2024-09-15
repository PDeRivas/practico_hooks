export default async function addReceta(nombre, ingredientes, pasos){
    const response = await fetch(`http://localhost:3000/receta/`, {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre,
          ingredientes: ingredientes,
          pasos: pasos
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    });
    return response
}