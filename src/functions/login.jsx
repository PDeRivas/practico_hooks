export default async function login(nombre, contrasena){
    let usuarios = localStorage.getItem('usuarios')
    let id = 0
    let logeado = false

    if (usuarios != null){
        usuarios = JSON.parse(usuarios)
        usuarios.forEach((usuario)=>{
            if (usuario.nombre == nombre && usuario.contrasena == contrasena){
                id = usuario.id
                logeado = {id:id, nombre: nombre, logeado:true}
                sessionStorage.setItem('usuario', JSON.stringify(logeado))
            }
        })
    }
    console.log(logeado)
    return logeado
}
