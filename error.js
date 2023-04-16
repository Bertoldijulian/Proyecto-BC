function saludar() {
    if(saludar === "hola"){
        return ("Has saludado correctamente")
    } 
    throw new Error ("No has saludado correctamente")
}

saludar("buenas")

const ob = curso => {
    if (curso === "js" ) {
        return true
    }
    return false
}

const curso2 = "python";

try {
    const finalizar_curso = ob(curso2)
    console.log(finalizar_curso)
}
catch (e) {
    console.error("hay un error ${e}")
}
finally{
    console.log('si existe un error, vuelve a intentar')
}