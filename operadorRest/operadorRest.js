// el operador rest te permite pasar argumentos sin especificar la cantidad en la funcion
function rest(...args) {
  // ...args es un array
  console.log(args);
  console.log(args.length);
}

rest({ hola: "Hola" }, 0);

let myArray = [2, 2, 2, 2];
let initialValue = 0;

console.log("-------------- reduce ---------------");
let sumaDeArray = myArray.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  initialValue
);

console.log(sumaDeArray);

console.log("------------ SPREAD ---------------");

let numeros = [1, 2, 3];

function sumar(x, y, z) {
  return x + y + z;
}

console.log(sumar(...numeros));

// --------------  desestructuracion -----------------------

const objeto = {
  x: 10,
  y: 20,
  z: 30,
};

const { x, y, z } = objeto;

console.log(x);
console.log(y);
console.log(z);

let usuario = {
  bruceLee: {
    nombre: "Bruce",
    apellido: "Lee",
  },
};

const {
  bruceLee: { nombre, apellido },
} = usuario;

console.log(nombre, "y", apellido);
