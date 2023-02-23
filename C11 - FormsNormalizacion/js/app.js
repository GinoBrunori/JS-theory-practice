let datosCaputarados = {
  nombre: "",
  apellido: "",
  telefono: "",
  contrasenia: "",
  hobbies: [],
  nacionalidad: "",
};

//capturo inputs
let nombreInput = document.querySelector(".datosPersonales #nombre");
console.log(nombreInput);

let apellidoInput = document.querySelector(".datosPersonales #apellido");
console.log(apellidoInput);

let passwordInput = document.querySelector(".datosPersonales #pass");
console.log(passwordInput);

let telInput = document.querySelector(".datosPersonales #tel");
console.log(telInput);

const allHobbies = document.getElementsByName("hobbies");
console.log(allHobbies);
// otra forma de caputar
// document.querySelectorAll('input[name="hobbies"]')

const allNacionalities = document.getElementsByName("nacionalidad");
console.log(allNacionalities);

// capturo los values de los inputs y los guardo en el objeto

const form = document.querySelector("form");
console.log(form);

// FORMA RARA
// form.addEventListener("submit", (e) =>{
//   e.preventDefault();
//   const data = Object.fromEntries(
//     new FormData(e.target)
//   )
//   console.log(data);
// })

form.addEventListener("submit", function (e) {
  e.preventDefault();

  datosCaputarados.nombre = ponerEnMayusLaPrimeraLetra(nombreInput.value);
  datosCaputarados.apellido = ponerEnMayusLaPrimeraLetra(apellidoInput.value);
  datosCaputarados.contrasenia = passwordInput.value;
  datosCaputarados.telefono = telInput.value;

  allHobbies.forEach((hobbie) => {
    hobbie.checked && datosCaputarados.hobbies.push(hobbie);
  });

  allNacionalities.forEach((nation) => {
    if (nation.checked) {
      datosCaputarados.nacionalidad = nation;
    }
  });

  console.log(datosCaputarados);
});

// funciones
function ponerEnMayusLaPrimeraLetra(string) {
  const todoEnMinus = string.toLowerCase();
  return todoEnMinus.charAt(0).toUpperCase() + todoEnMinus.slice(1);
}
