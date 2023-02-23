const body = document.querySelector("body");
const button = document.querySelector("button");
const iconoLuna = document.querySelector("button #iconoLuna");
// console.log(iconoLuna);
const checkbox = document.querySelector("main form #inputCheckbox");
console.log(checkbox);

function activarDark() {
  const cambio = body.classList.toggle("dark");
  if (cambio) {
    // toggle devuelve true o false dependiendo si se agrega la clase o no
    // iconoLuna.innerText = "🌞";
    button.innerText = "Light Mode 🌞";
  } else {
    // iconoLuna.innerText = "🌜";
    button.innerText = "Dark Mode 🌜";
  }
}
