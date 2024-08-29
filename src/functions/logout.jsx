export default async function logout(){
    sessionStorage.clear()
    return { logeado: false };
}
