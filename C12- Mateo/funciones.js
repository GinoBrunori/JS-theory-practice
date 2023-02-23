const listado = [
  "Email no válido o incorrecto.",
  "Contraseña no válida o incorrecta.",
  "Es necesario aceptar los términos y condiciones.",
  "hola"
];

// la funcion de alto orden => .map te devuelve ya un array
// const listadoEnMayus = listado.map((item) => item.toUpperCase());
// console.log(listadoEnMayus);


const divErrores = document.querySelector('.errores')
//* Renderizar el listado de errores en el div .errores

//* forma 1: esto te devuelve un array con una estructuras html en string
const listadoHTML = listado.map((item) => {
  return `<p><small> ${item} </small></p>`;
});
// divErrores.innerHTML = listadoHTML.join('')

console.log(listadoHTML);
console.log(listadoHTML.join(' '));

//* forma 2 => simplificada. El join hace que el array devuelto por el .map se convierta en un solo string
divErrores.innerHTML = listado.map( item => `<p><small> ${item} </small></p>`).join('')


//* forma 3 con filter. 
const erroresFilter =  listado.filter( item => item.length > 10).map(item => `<p><small> ${item} </small></p>`).join('')
console.log(erroresFilter);













// otra manera de hacerlo, pero el .forEach al no devolver un array se debe crear uno antes y luego pushearlo.
const listadoPush = [];

listado.forEach((item) => {
  listadoPush.push(item.toLowerCase());
});

// console.log(listadoPush);
