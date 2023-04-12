//Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 172;

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMts = 1.72;

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKG = 72.3;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let altura2 = Math.ceil(alturaMts);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso2 = Number.parseInt(pesoKG);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxVal = Number.MAX_VALUE;
let maxVal2 = '1.7976931348623157e+308 + 1';

let maxVal3 = (Number(maxVal2) + maxVal)
