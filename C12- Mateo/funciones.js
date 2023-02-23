const listado = [
  "Email no válido o incorrecto.",
  "Contraseña no válida o incorrecta.",
  "Es necesario aceptar los términos y condiciones.",
  "Este es nuevo",
];

// la funcion de alto orden => .map te devuelve ya un array
// const listadoEnMayus = listado.map((item) => item.toUpperCase());
// console.log(listadoEnMayus);

const listadoHTML = listado.map((item) => {
  return `<p><small> ${item} </small></p>`;
});

console.log(listadoHTML);
console.log(listadoHTML.join(' '));

const divErrores = document.querySelector('.errores')
// console.log(divErrores);

// divErrores.innerHTML = listadoHTML.join('')
divErrores.innerHTML = listado.map( item => `<p><small> ${item} </small></p>`).join('')














// otra manera de hacerlo, pero el .forEach al no devolver un array se debe crear uno antes y luego pushearlo.
const listadoPush = [];

listado.forEach((item) => {
  listadoPush.push(item.toLowerCase());
});

// console.log(listadoPush);
