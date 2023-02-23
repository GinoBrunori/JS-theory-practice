// console.log("Hola");

console.log(
  "---------------------------------- while --------------------------------- "
);
let i = 0;

while (i <= 3) {
  console.log("hola " + i);
  console.log("Valor de i: " + i);
  i++;
}

console.log(
  "---------------------------------- do while --------------------------------- "
);
// el do while sirve para ejecutar por lo menos una vez una sentencia antes de un condicional.

let x = 10;

do {
  console.log(`Valor de x: ${x}`);
  x++;
} while (x < 10);

console.log(
  "---------------------------------- for --------------------------------- "
);
let miArreglo = [];
for (let index = 0; index < 26; index += 2) {
  miArreglo.push(index);
}

console.log({ miArreglo });

const myArray = [4, 6, 8, 2];

let total = 0;

for (let i = 0; i < myArray.length; i++) {
  total += myArray[i];
}

console.log(total);

let lenguajes = ["js", "java", "go", "mysql"];
console.log(lenguajes);
let lenguajesMayus = [];
for (let i = 0; i < lenguajes.length; i++) {
  lenguajesMayus.push(lenguajes[i].toUpperCase());
}
// console.log(lenguajes);
console.log(lenguajesMayus);

/* -------------------------------------------------------------------------- */

function contarNumerosPares(arreglo) {
  let total = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}

console.log(contarNumerosPares(myArray));

function contarNumerosImparesPares(arreglo) {
  let total = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 != 0) {
      total++;
    }
  }
  return total;
}

console.log(contarNumerosImparesPares(myArray));

/* -------------------------------------------------------------------------- */

function buscarPerfil(nombre, propiedad) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}
