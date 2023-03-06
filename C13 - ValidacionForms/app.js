const form = document.querySelector("form");
console.log(form);

const inputEmail = document.querySelector(".fila input#email");
console.log(inputEmail);

const inputPassword = document.querySelector(".fila input#password");
console.log(inputPassword);

const inputSelect = document.querySelector(".fila select#rol");
console.log(inputSelect);

const inputCondiciones = document.querySelector(".condiciones input#legal");
console.log(inputCondiciones);

const divErrores = document.querySelector("div.errores");
console.log(divErrores);

const datosUsuario = {
  email: "",
  password: "",
  rol: "",
  condiciones: false,
};

let errores = [];
/* -------------------------------------------------------------------------- */

form.addEventListener("submit", function (e) {
  //   datosUsuario.email = normalizarEmail(inputEmail.value);
  //   datosUsuario.password = inputPassword.value;
  //   datosUsuario.rol = inputSelect.value;

  if (
    quitarEspacios(inputEmail.value) === "" ||
    quitarEspacios(inputEmail.value).length < 5
  ) {
    errores.push("Por favor complete el email");
  } else {
    datosUsuario.email = quitarEspacios(inputEmail.value);
  }

  if (inputPassword.value === "" || inputPassword.value.length < 6) {
    errores.push("Por favor complete bien la contraseña");
  } else {
    datosUsuario.password = quitarEspacios(inputPassword.value);
  }

  if (inputSelect.value === "") {
    errores.push("Por favor elija un rol");
  } else {
    datosUsuario.rol = inputSelect.value;
  }
  console.log(inputSelect.value);

  if (inputCondiciones.checked === false) {
    errores.push("Por favor acepte los terminos");
  } else {
    datosUsuario.condiciones = inputCondiciones.value;
  }

  /* ------------------------ renderizamos los errores ------------------------ */
  divErrores.innerHTML = renderizarErrores(errores);

  /* -------------------------------------------------------------------------- */
  if (errores.length > 0) {
    e.preventDefault();
  }

  // reiniciamos los errores para que no se sigan renderizando
  errores = [];

  console.log(datosUsuario);
  // console.log("datosUsuario");
});

/* ------------------------ funciones  ----------------------- */
function quitarEspacios(input) {
  return input.trim();
}

function renderizarErrores(listadoErrores) {
  return listadoErrores
    .map((error) => {
      return `<p> <small> ${error} </small> </p>`;
    })
    .join("");
}
