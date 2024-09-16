export default async function deleteReceta(id){
    const response = await fetch(`http://localhost:3000/receta/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    });
    return response
}