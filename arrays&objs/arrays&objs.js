// notación de corchetes
let lastName = "Brunori";
let primeraLetra = lastName[0];
let lastNameLetter = lastName[lastName.length - 1];
const penultimaLetra = lastName[lastName.length - 2];
// console.log({primeraLetra})
// console.log({lastNameLetter});
// console.log({penultimaLetra});

// Arrays
// Anida un arreglo dentro de otro arreglo
const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];
// Esto también es conocido como arreglo multidimensional.
// console.log({teams});

// INMUTABILIDAD: no se pueden cambiar caracteres individuales de un string en un array.
// const arrayString = ["hola"];
// arrayString[0] = "h"; //Esto cambiará todo el array a "h"
// console.log({arrayString});

// MUTABILIDAD:
const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log({ ourArray });

const array = [50, 60, 70];
console.log(array[0]);
console.log({ array });

// Secuencias de escape
const cadenaConComillas = 'Soy una cadena de caracteres \n hola"';
const cadenaConComillas2 = 'Soy una cadena de caracteres "hola" ';
console.log(cadenaConComillas);
console.log(cadenaConComillas2);
console.log(cadenaConComillas2.length);
console.log(cadenaConComillas[cadenaConComillas.length - 1]);

let miNombre = "Gino";

function mostrarNombre() {
  // var miNombre = "Jose"
  console.log(miNombre);
}

mostrarNombre();
console.log(miNombre);

const array222 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function proximoEnfila(array, numero) {
  array.push(numero);
  return array.shift();
}

console.log(proximoEnfila(array222, 22));
console.log(JSON.stringify(array222));
console.log(array222);

const hola = false;

function a() {
  if (hola) {
    return "yes";
  } else {
    return "false";
  }
}

console.log(a());

function golf(parDeGolpesEsperado, golpes) {
  if (parDeGolpesEsperado == golpes) {
    console.log("Hoyo en uno");
  } else if (parDeGolpesEsperado) {
  }
}

console.log(
  " ------------------------ Objetos -------------------------------------------------- "
);

const objeto = {
  nombre: "Gino",
  apellido: "Bru",
  edad: 22,
  "horas viciando": 10,
};

//formas de mostrar el valor de una propiedad
// 1
console.log(objeto.apellido);
// 2
// Para mostrar un valor de una propiedad en especifico se la debe poner con [] en el console.log. Tambien sirve para poner variables
const name = "nombre";
console.log(objeto["horas viciando"]);
console.log(objeto["nombre"]);
console.log(objeto[name]);

// Agregando el valor de una propiedad en una variable
const valorObj = objeto.apellido;
console.log({ valorObj });

// Cambiando valor a la propiedad
objeto.apellido = "Brunori";
console.log(objeto);

// Agregando propiedades
objeto.deporte = "rugby";
console.log(objeto);

objeto["juegos"] = "Dota";
console.log(objeto);

// Eliminando propiedad
delete objeto["horas viciando"];
console.log(objeto);

// Como saber si un objeto tiene una propiedad => devuelve true o false
console.log(objeto.hasOwnProperty("nombre"));

console.log(
  " ---------------------------- array de objetos ---------------------------- "
);

// Como acceder a las propiedades de un array de objetos
const arrayDeObjetos = [
  {
    color: "red",
    value: "#f00",
    numbers: [1, 2, 3, 4, 5],
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
];

console.log(arrayDeObjetos[0].color);
console.log(arrayDeObjetos[0]["color"]);

console.log(arrayDeObjetos[0].numbers[0]);
console.log(arrayDeObjetos[0]["numbers"][0]);

console.log(
  "------------------------ objetos dentro de objetos ----------------------- "
);
var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};

console.log("--------------------- CONGELANDO UN OBJETO ----------------");
let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff",
};

Object.freeze(colores); // esto hace que al que objeto no se le pueda agregar ni eliminar propiedades y valores
colores.amarillo = "amarillo";
delete colores.blanco;
console.log(colores);

console.log(miReceta.ingredientes.masa.agua);

console.log(
  " -------------------------------- funciones -------------------------------"
);

const coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Staying Alive"],
  },
  5439: {
    tituloDelAlbum: "ABBA Gold",
  },
};
