
//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = ['Fideos', 'Yogurt', 'Queso', 'Pescado', 'Cereales']

//Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.unshift('Aceite de Girasol')

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.shift('Aceite de Girasol')

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
    {titulo: "The Batman" , director: "Matt Reeves", fecha: 2022},
    {titulo: "Joker" , director: "Todd Phillips", fecha: 2019},
    {titulo: "Blood Diamond" , director: "Edward Zwick", fecha: 2007}
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasActuales = peliculas.filter (movie => movie.fecha > 2010)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map (director => director.director)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map (pelis => pelis.titulo)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const d_t = directores.concat(directores)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos = [...directores, ...titulos]