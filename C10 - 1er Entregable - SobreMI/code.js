/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
// const nombre = prompt("Ingrese su nombre").toUpperCase();
// const edad = prompt("Ingrese su edad");
// const ciudad = prompt("Ingrese su ciudad").toUpperCase();
// const interesPorJS = confirm("Esta interesado en JS?");

const nombreRender = document.querySelector("div.card-header h3 span#nombre");
const edadRender = document.querySelector("div.card-header h3 span#edad");
const ciudadRender = document.querySelector("div.card-header h3 span#ciudad");
const interesEnJSRender = document.querySelector(
  "div.card-header h3 span#javascript"
);

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt("Ingrese su nombre").toUpperCase();
  const edad = Math.round(prompt("Ingrese su edad"));
  const ciudad = prompt("Ingrese su ciudad").toUpperCase();
  const interesPorJS = confirm("Esta interesado en JS?");

  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  interesPorJS
    ? (datosPersona.interesPorJs = "SI")
    : (datosPersona.interesPorJs = "NO");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  nombreRender.textContent = datosPersona.nombre;
  edadRender.textContent = datosPersona.edad;
  ciudadRender.textContent = datosPersona.ciudad;
  interesEnJSRender.textContent = datosPersona.interesPorJs;
}

const fila = document.querySelector("div #fila");
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  fila.innerHTML = "";

  listado.forEach((lista) => {
    fila.innerHTML += `
      <div class="caja">
      <img src="${lista.imgUrl}" alt="${lista.lenguajes}">
      <h2> ${lista.lenguajes} </h2>
      <span> ${lista.bimestre} </span>
      </div>
    `;
  });
}

const sitio = document.querySelector("#sitio");
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const pSobreMi = document.querySelector("#card #sobre-mi");
window.addEventListener("keypress", function (e) {
  if (e.key === "f") {
    pSobreMi.classList.toggle("oculto");
  }
});
