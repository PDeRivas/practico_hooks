export default function addUsuario(nombre, contrasena){
    let usuarioAgregado = false
    let usuariosString = localStorage.getItem('usuarios')
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
        usuariosJson.push({
            id: lastId,
            nombre: nombre,
            contrasena: contrasena,
        })
        localStorage.setItem('usuarios', JSON.stringify(usuariosJson))
        usuarioAgregado = true
    }
    return usuarioAgregado
}