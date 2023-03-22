const form = document.querySelector("form");
console.log(form);

const inputEmail = document.querySelector(".fila #email");
console.log(inputEmail);
const inputPassword = document.querySelector(".fila #password");
console.log(inputPassword);
const h1 = document.querySelector(".h1-welcome");

/* -------------------------------------------------------------------------- */
let datosUser = {
  email: "",
  pass: "",
};

inputEmail.addEventListener("input", function () {
  datosUser.email = inputEmail.value;
  console.log(datosUser);
});

inputPassword.addEventListener("input", function () {
  datosUser.pass = inputPassword.value;
  console.log(datosUser);
});

// agrego al local storage el mail y password ingresados
form.addEventListener("submit", function (e) {
  e.preventDefault();

  limpiarStorage();
  
  if (
      localStorage.getItem("mail") == "" &&
      localStorage.getItem("pass") == ""
      ) {
          localStorage.setItem("mail", datosUser.email);
          localStorage.setItem("pass", datosUser.pass);
        }
        
        h1.innerText = `Bienvenido ${localStorage.getItem("mail")}`;
});

function limpiarStorage() {
    localStorage.setItem('mail', "")
    localStorage.setItem('pass', "")
}