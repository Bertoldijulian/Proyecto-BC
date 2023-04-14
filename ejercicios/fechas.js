//La fecha de hoy
const date = new Date()

//La fecha de tu nacimiento
const nacimiento = new Date(1997, 1, 22)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const date2 = new Date(2023, 05, 14)

if(date2 > nacimiento){
    console.log(`${date2} es mas tarde que ${nacimiento}`)
} 
else {console.log(`${date2} es mas temprano que ${nacimiento}`)}


//Una variable que contenga el día de tu nacimiento
const dia = nacimiento.getDate()

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = nacimiento.getMonth() + 1

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = nacimiento.getFullYear()
