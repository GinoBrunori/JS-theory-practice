// DOM (document object manipulation);
// Objetos nativos JS

//! window => El objeto window representa la ventana que contiene al documento.
//! sirve para trabajar con la ventana del nav.
//window.location → Retorna un objeto con los detalles de la URL, la ruta, el href, etc.
//window.height y window.width → Retorna la altura y/o el ancho de la pantalla actual de la ventana.

//? document => Hay que recordar que el DOM (document object model) representa al documento que se carga en el navegador como un árbol de nodos, en donde cada nodo representa una parte del documento.
//? sirve para trabajar con el contenido del documento.
Los nodos son elementos o etiquetas del HTML que en conjunto forman un “árbol de nodos” al que llamamos DOM (Document Object Model).
Entonces, en JavaScript, el nodo objeto principal es el document, y dentro de él, se clasifican estos otros:

- Todas las etiquetas del HTML que son nodos de elementos.
- Los nodos de atributos de los elementos.
- Los nodos de texto.
- Los nodos de comentarios.
  Cada nodo del árbol es un objeto, es decir, que contienen una colección de propiedades.
  console.dir(nombre del nodo) => muestra por consola todas las propiedades de un nodo.

//EJ: document.bgColor => cambia el color del background.
//EJ: document.styleSheets => muestra cuantas hojas de estilo estan vinculadas.

Funciones de window: alert, prompt.

Document

- capturamos nodos
- querySelector = selectores css / capturar elementos
  Ej: const listadoNetflix = document.querySelectorAll('div .divPrincipal');
  Ej: const listadoTitulos = []  
  Ej: listadoNetflix.forEach(item => listadoTitulos.push(item.textContext));
  Ej: listadoTitulos.indexOf('Batman');
  Ej: listadoNetflix.forEach(item => item.style.border = '1px solid red');

- Se puede capturar un nodo dentro de otro nodo. Ej: un span dentro de un div
  Ej: document.querySelector('div').querySelector('span');

- Se pueden capturar nodos a través de sus atributos.
  Ej: document.querySelector('button[type= "button"]')

nodelist != array: no es exactamente un array. No se le puede hacer un .pop/.push, pero se lo puede recorrer
nodelist & array = iterables. EJ: for, forEach, for in/on

querySelector => se usa mas.

<!-- ----------------------------------------------------------------------- -->

Estilos en linea .style => puede pisar los estilos previos. No es buena práctica
toggle = devuelve un true si agrega una clase / false si la remueve

add, remove / toggle => no hay ninguno mejor que otro, depende el contexto

---

document.body.classList => devuelve las clases que tiene ese nodo
document.body.classList.length => devuelve la cantidad de clases que tiene ese nodo

<!-- ----------------------------------------------------------------------- -->
