//Una cadena de texto con tu Nombre
let nombre = "Julian";

//Otra cadena de texto con tu Apellido
let apellido = "Bertoldi";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidad_letras = estudiante.length;

//Una variable que contenga la primera letra del Nombre
let primera_letra = nombre.charAt(0);

// Otra variable que contenga la última letra del Apellido
let ultima_letra = apellido.charAt(7);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let sin_espacios = estudiante.trim();

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let contiene = estudiante.includes("Julian");