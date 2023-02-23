const button = document.querySelector(".buttonClickMe");
console.log(button);

const buttonSumar = document.querySelector(".buttonSumar");
console.log(buttonSumar);

const buttonRestar = document.querySelector(".buttonRestar");
console.log(buttonRestar);

const buttonReset = document.querySelector(".resetButton");

/* -------------------------------------------------------------------------- */
button.addEventListener("click", () => {
  console.log("click");
  button.classList.toggle("cambiarColor");
});

buttonSumar.addEventListener("click", () => {
  sumarUno();
});

buttonRestar.addEventListener("click", () => {
  restarUno();
});

buttonReset.addEventListener("click", () => {
  reset();
});

/* -------------------------------------------------------------------------- */
let contador = 0;

const sumarUno = () => {
  contador++;
  button.textContent = contador;
  console.log(contador);
};

const restarUno = () => {
  // let contador = 0;
  contador--;
  button.textContent = contador;
  console.log(contador);
};

const reset = () => {
  contador = 0;
  button.textContent = contador;
};

/* -------------------------------------------------------------------------- */
// document.addEventListener("keypress", (e) => {
//     console.log(e.key)
// })

console.log(contador);
