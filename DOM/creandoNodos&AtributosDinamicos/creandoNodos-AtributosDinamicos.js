// ?-------------------------------------------------------------------------- //
// ?                             CREACION DE NODOS                             //
// ?-------------------------------------------------------------------------- //

//? .createElement
//* Crea un nodo de tipo elemento según el nombre de la etiqueta de HTML que le indiquemos.
let creandoButton = document.createElement("button");

//? .createTextNode
//* Crea un nodo de texto explicitado entre comillas. No se visualiza hasta asignarlo a un elemento existente del DOM.
let creandoTexto = document.createTextNode("hola mundo");

//? .appendChild
//* Adhiere dentro del DOM un elemento hijo a un elemento padre. Si el elemento padre ya existía en el documento, cambia su posición hacia el otro elemento padre indicado. Si no existe, lo creamos con el método 1.
creandoButton.appendChild(creandoTexto);

let main = document.querySelector("main");
main.appendChild(creandoButton);

//! -------------------------------------------------------------------------- */
//!                             ATRIBUTOS DINAMICOS                            */
//! -------------------------------------------------------------------------- */

//! .hasAtributte.
//* Sirve para consultar si un elemento posee un atributo determinado.
//* Recibe el nombre del atributo y devuelve true(si lo posee) o false(no lo posee)
console.log(main.hasAttribute("class"));
console.log(main.hasAttribute("src"));

//! .getAttribute
//* Sirve para obtener el valor de un atributo determinado.
//* Recibe el atributo y devuelve el valor de este (si existe). Si no existe retorna "null";
let input = document.querySelector("input");
console.log(input.getAttribute("id"));
console.log(main.getAttribute("class"));

//! .remoteAttribute
//* Sirve para remover un atributo con su valor.
//* Recibe el nombre de un atributo, si no lo encuentra no hace nada.
let img = document.querySelector("img");
img.removeAttribute("alt");

//! .setAttribute
//* Sirve para agregar un atributo con su valor a un elemento
//* Recibe el nombre del atributo y un valor para el mismo. No retorna nada
img.setAttribute("src", "./descarga.png");
