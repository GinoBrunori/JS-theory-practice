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
  ],
};

/* -------------------------------------------------------------------------- */
/*                              CAPTURO LOS NODOS                             */
/* -------------------------------------------------------------------------- */

const form = document.querySelector("form");
const inputEmail = document.querySelector(".input-container #email-input");
const inputPassword = document.querySelector(
  ".input-container #password-input"
);
const iniciandoSesion = document.querySelector("#status-container #loader");
const errorContainer = document.querySelector(
  "#status-container #error-container"
);
const h1 = document.querySelector("h1");
const buttonVolver = document.querySelector(".button-volver");

/* -------------------------------------------------------------------------- */
/*                     NORMALIZAMOS EL EMAIL & CONTRASEÑA                     */
/* -------------------------------------------------------------------------- */
function eliminarEspacio(input) {
  return input.trim();
}

/* -------------------------------------------------------------------------- */
/*                                validar email & contaseña                            */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
  let resultado = false;

  if (
    email.includes("@") &&
    email.length > 3 &&
    email.length < 30 &&
    // email.includes(".com") &&
    !email.includes(" ")
  ) {
    resultado = true;
  }

  // let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  // // EJEMPLO CON EXPRESION REGULAR 👇
  // if (regex.test(email)) {
  //   resultado = true;
  // }

  return resultado;
}

/* -------------------------------------------------------------------------- */
function validarPassword(password) {
  let resultado = false;

  if (password.length > 5) {
    resultado = true;
  }

  // La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.

  // let regex = new RegExp("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$");

  // regex for a basic password must be more than 8 chars
  // const regex = /^[A-Za-z0-9]\w{8,15}$/;

  // if (regex.test(password)) {
  //   resultado = true;
  // }

  return resultado;
}

/* -------------------------------------------------------------------------- */
/*           funciones para buscar el mail y contraseña en el objeto          */
/* -------------------------------------------------------------------------- */
function buscarEmail(valueInput) {
  let resultado = false;

  baseDeDatos.usuarios.forEach((usuario) => {
    if (valueInput === usuario.email) {
      resultado = true;
    }
  });
  return resultado;
}

function buscarContraseña(valueInput) {
  let resultado = false;

  baseDeDatos.usuarios.forEach((usuario) => {
    if (valueInput === usuario.password) {
      resultado = true;
    }
  });
  return resultado;
}

/* -------------------------------------------------------------------------- */

function validarTodo() {
  // normalizo los datos ingresados y los guardo en una variable 👇
  let valueInputEmail = eliminarEspacio(inputEmail.value);
  let valueInputPassword = eliminarEspacio(inputPassword.value);

  // oculto el texto "iniciando sesion" 👇
  iniciandoSesion.classList.add("hidden");

  // Valido si los datos ingresados están correctos y busco si coinciden el mail&password 👇
  if (
    validarEmail(valueInputEmail) &&
    buscarEmail(valueInputEmail) &&
    validarPassword(valueInputPassword) &&
    buscarContraseña(eliminarEspacio(valueInputPassword))
  ) {
    ocultarForm(valueInputEmail);
    // location.replace("./usuario.html");
    form.reset();
  } else {
    mostrarErrores();
  }

  /* ------------------------------ localStorage ------------------------------ */
  if (
    sessionStorage.getItem("mail") == "" &&
    sessionStorage.getItem("pass") == ""
  ) {
    sessionStorage.setItem("mail", valueInputEmail);
    sessionStorage.setItem("pass", valueInputPassword);
  }
}

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   EVENTOS                                  */

/* ------------------------- INPUT EMAIL & PASSWORD ------------------------- */

inputEmail.addEventListener("input", function (evento) {
  // si el mail que ingresamos cumple con las validaciones, se pondra verde el input. Si no se le quita la clase

  if (validarEmail(inputEmail.value)) {
    inputEmail.classList.add("border-ok");
    inputEmail.classList.remove("border-ok-red");
  } else {
    inputEmail.classList.remove("border-ok");
    inputEmail.classList.add("border-ok-red");
  }
});

inputPassword.addEventListener("input", function () {
  if (validarPassword(inputPassword.value)) {
    inputPassword.classList.add("border-ok");
    inputPassword.classList.remove("border-ok-red");
  } else {
    inputPassword.classList.remove("border-ok");
    inputPassword.classList.add("border-ok-red");
  }
});

inputEmail.addEventListener('focus', function(){
  inputEmail.classList.add('border-blue-focus')

})

inputPassword.addEventListener('focus', function(){
  inputPassword.classList.add('border-blue-focus')
})
/* ------------------------------- FORM ------------------------------------------- */

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Le saco la clase hidden para que aparezca el mensaje de "iniciando sesion" 👇
  iniciandoSesion.classList.remove("hidden");

  // Limpio los errores para que no se vuelvan a renderizar
  errorContainer.innerHTML = "";

  // funcion que simula el asincronismo 👇
  setTimeout(validarTodo, 1000);
});

/* ------------------------------- BUTTON BACK ------------------------------ */
buttonVolver.addEventListener("click", function () {
  form.classList.remove("hidden");
  buttonVolver.classList.add("hidden");
  volverAlForm();
  limpiarStorage();
});


/* -------------------------------------------------------------------------- */
// buttonVolver.addEventListener("click", function () {
//   // buttonVolver.classList.add('hidden')
  
// });


/* -------------------------------------------------------------------------- */
/*                              funciones utiles                              */
/* -------------------------------------------------------------------------- */

/* -------------------- funcion que muestra los errores -------------------- */
function mostrarErrores() {
  errorContainer.classList.remove("hidden");

  errorContainer.innerHTML = `
  <p> <small> Alguno de los datos ingresados son incorrectos </small> </p>`;
}

/* ------------- Funcion que oculta el form y muestra un mensaje de bienvenida con el nombre de user ------------ */

function ocultarForm(valueInputEmail) {
  form.classList.add("hidden");

  baseDeDatos.usuarios.forEach((user) => {
    if (valueInputEmail === user.email) {
      h1.innerText = `Bienvenido al sitio ${user.name} ☺`;
    }
  });
  buttonVolver.classList.remove("hidden");
}

/* ------------------- funcion para aplicarle A UN BOTTON ------------------- */
function volverAlForm() {
  form.classList.remove("hidden");
  h1.innerText = "Iniciar Sesión";
  buttonVolver.classList.add("hidden");
  
}


/* -------------------------------------------------------------------------- */
function limpiarStorage() {
  sessionStorage.setItem("mail", "");
  sessionStorage.setItem("pass", "");
}

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
