let numAleatorio = Math.floor(Math.random() * 20);

console.log(numAleatorio);

console.log("---------------numeroAleatorioSuperior--------------");
function numeroAleatorioSuperior(num) {
  return Math.floor(Math.random() * num);
}

console.log(numeroAleatorioSuperior(30));

function rangoAleatorio(limiteInf, limiteSup) {
  return Math.floor(Math.random() * (limiteSup - limiteInf) + limiteInf);
}

console.log(rangoAleatorio(5, 20));

console.log(
  "-------------------------------- parseInt -------------------------------- "
);

let a = "-22 ";
const b = parseInt(a);
console.log(b);

console.log(
  "/* ------------------------------ if ternario ----------------------------- */"
);

function retornarMinimo(x, y) {
  return x < y ? x : y;
}

console.log(retornarMinimo(5, 4));

function compararNumeros(a, b) {
  return a == b
    ? `${a} y ${b} son iguales`
    : a > b
    ? `${a} es mayor a ${b}` // es como si fuese un else if
    : `${b} es mayor que ${a}`;
}

console.log(compararNumeros(20, 12));

const miVar = "hola";

function aaa() {
  console.log({ miVar });
  var chau = "chau";
  console.log({ chau });
}

aaa();
//console.log(chau); // error

/* -------------------------------------------------------------------------- */

for (var index = 0; index < 3; index++) {
  console.log(index);
}

console.log(index);

/* -------------------------------------------------------------------------- */
function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
    return undefined;
  }
  return PI * radio ** 2; // elevar un numero a una potencia => **
}

console.log(
  " ---------------------------- Mutar un array ----------------------------------------------"
);

const miArray = [1, 2, 3, 4, 5];
// miArray = [4, 5, 6, 7, 8];
console.log(miArray); // error => ya que una variable const no puede cambiar de valor
// pero esto si se puede hacer. Mutacion
miArray[0] = 6;
miArray[1] = 7;
miArray[3] = 8;
console.log(miArray);

