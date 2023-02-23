// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }

//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }

//   processUserInput(greeting);

let contenidoPrincipal = document.querySelector(".contenido");
contenidoPrincipal.style.backgroundColor = "red";

let dom = document.querySelector("h1");
console.log(dom);
dom.innerHTML += " <i> innerHTML </i>";
dom.innerText += " <i> innerText </i>";

let body = document.querySelector('body');
console.log(body);



body.classList.add('bodyDark')
