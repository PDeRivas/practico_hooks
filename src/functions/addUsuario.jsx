export default async function addUsuario(nombre, contrasena){
    let usuariosString = localStorage.getItem('usuarios')
    let usuarioAgregado = false
    
    let usuariosJson = []
    let lastId = 0

    if (!usuariosString || usuariosString == '[]'){
        lastId = 1
    }

    else{
        usuariosJson = JSON.parse(usuariosString)
        lastId = usuariosJson[usuariosJson.length-1].id + 1
    }
    
    let nombreDisponible = true
    usuariosJson.forEach((usuario) => {
        if (usuario.nombre == nombre){
            nombreDisponible = false
        }
    })

    if (nombreDisponible){
        usuarioAgregado = {id:lastId, nombre: nombre, logeado:true}
        usuariosJson.push(usuarioAgregado)
        localStorage.setItem('usuarios', JSON.stringify(usuariosJson))
        sessionStorage.setItem('usuario', JSON.stringify(usuarioAgregado))
    }
    return usuarioAgregado
}