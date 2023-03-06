// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ]
};

// console.log(baseDeDatos.usuarios[0].name);
// console.log(baseDeDatos.usuarios[1]);

// ACTIVIDAD

/* -------------------------------------------------------------------------- */
/*                              capturo los nodos                             */
/* -------------------------------------------------------------------------- */
const form = document.querySelector('form');
const inputEmail = document.querySelector('.input-container #email-input')
const inputPassword = document.querySelector('.input-container #password-input')

const iniciandoSesion = document.querySelector('#status-container #loader');
const errorContainer = document.querySelector('#status-container #error-container');

// console.log(form, inputEmail, inputPassword, iniciandoSesion, errorContainer);
/* -------------------------------------------------------------------------- */
const valueInputEmail = elimianarEspacio(inputEmail.value);
const valueInputPassword = elimianarEspacio(inputPassword.value);

// const usuarios = 

function validarTodo(){
  // console.log("Hola")
  iniciandoSesion.classList.add('hidden');

  if (valueInputEmail === "" || buscarEmail(valueInputEmail) === true){
    mostrarErrores()
  } else {
    ocultarForm()
  }
  
  // if (valueInputPassword === "" || valueInputPassword.length < 5 || valueInputPassword != buscarContraseña(valueInputPassword)) {
  //   mostrarErrores()
  // } else {
  //   ocultarForm()
  // }

 
}

function buscarEmail(valueInput){
  baseDeDatos.usuarios.forEach( (usuario, index) => {
    if(valueInput == usuario.email){
      return "true";
    } 
  })
}

console.log(buscarEmail(baseDeDatos.usuarios[1].email))
  // baseDeDatos.usuarios.forEach( (item,index) => {
    
  //   console.log(`${item.name} + ${index}` )
  // })

// console.log(buscarEmail(baseDeDatos.usuarios[0].email))

function buscarContraseña(valueInput){
  baseDeDatos.usuarios.forEach( (usuario, index) => {
    if(valueInput === usuario[index].password){
      return valueInput;
    }
  })
}



form.addEventListener("submit", function(e){
  e.preventDefault()

  iniciandoSesion.classList.remove('hidden');
  errorContainer.innerHTML = ""

  setTimeout(validarTodo, 3000)
  
})


/* -------------------------------------------------------------------------- */
/*                              funciones utiles                              */
/* -------------------------------------------------------------------------- */
function elimianarEspacio (input){
  input.trim()
}

/* -------------------- funcion que muestras los errores -------------------- */
function mostrarErrores (){
  errorContainer.classList.remove("hidden");
  
  errorContainer.innerHTML = `
  <p> <small> Alguno de los datos ingresados son incorrectos </small> </p>`
}

/* ------------- Funcion que oculta el form y muestra un mensaje de bienvenida ------------ */
const h1 = document.querySelector('h1')
function ocultarForm (){
  form.classList.add("hidden");
  h1.innerText = "Bienvenido al sitio"
}
/* -------------------------------------------------------------------------- */
// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */