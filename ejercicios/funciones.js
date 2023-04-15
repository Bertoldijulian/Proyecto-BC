//Una función sin parámetros que devuelva siempre "true"
const num = 1

function nueva () {
    
    if(num >= 1) {
        return true
    }  
}

const f = nueva()

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function hola() {
    console.log('Hola soy una promesa');
}

setTimeout(hola, 5000);
console.log(hola);

//Una función generadora de índices pares automáticos
function* generadora() {
    let i = 2
    while (true) {
      yield i 
      i++
    }
}

const counter = generadora()