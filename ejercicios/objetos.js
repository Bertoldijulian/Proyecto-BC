//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = [
    {
        nombre: 'Julian',
        apellido: 'Bertoldi',
        edad:'26',
        altura:'1.72 mts',
        eresDesarrollador:'false'
    }
]
//Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos_amigos =[
    {
        nombre: 'Juan',
        apellido: 'Fernandez',
        edad:'26',
        altura:'1.76 mts',
        eresDesarrollador:'false'
    },
    {
        nombre: 'Nicolas',
        apellido: 'Sanchez',
        edad:'25',
        altura:'1.82 mts',
        eresDesarrollador:'true'
    }
]

const nueva_lista = [ ...datos, ...datos_amigos]
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
nueva_lista.sort((a, b) => a.edad - b.edad)