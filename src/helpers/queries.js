const URLColores = "http://localhost:4000/api/colores"

export const cargarColoresAPI = async ()=>{
    try {
        const respuesta = await fetch(URLColores)
    console.log(respuesta)
    return respuesta
    } catch (error) {
        console.error(error)
        
    }

}

export const guardarColoresAPI = async (nuevoColor)=>{
try {
    const respuesta = await fetch(URLColores,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(nuevoColor)
    })
    return respuesta
} catch (error) {
    console.error(error)
    return false
}
}

export const borrarColoresAPI = async(id)=>{
    try {
        const respuesta = fetch(URLColores+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    }
     catch (error) {
        console.error(error)
    }
}
    