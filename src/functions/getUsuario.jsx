export default function getUsuario(nombre){
    let usuarios = localStorage.getItem('usuarios')
    if (usuarios == null){
        return false
    }

    else{
        let id = 0
        usuarios = JSON.parse(usuarios)
        usuarios.forEach((usuario)=>{
            if (usuario.nombre == nombre){
                id = usuario.id
                return id
            }
        })
    }
}
