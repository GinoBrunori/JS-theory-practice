const listadoImagenes = [];
const contenedor = document.querySelector("#contenedor");

const items = document.querySelectorAll(".item");
items.forEach((i) => {
  i.innerHTML = `<a target="_blank"> <img> </a>`;
});

/* -------------------------------------------------------------------------- */
/*                                 <img></img>                                */
/* -------------------------------------------------------------------------- */
const imgs = document.querySelectorAll(".item img");
console.log(imgs);

imgs.forEach((item, indice) => {
  listadoImagenes.push(prompt("Ingrese el link de su album"));
  item.setAttribute("src", listadoImagenes[indice]);
});

console.log({ listadoImagenes });

/* -------------------------------------------------------------------------- */
/*                                      <a>                                     */
/* -------------------------------------------------------------------------- */
const a = document.querySelectorAll('.item a')
console.log(a);
a.forEach((item,indice) => {
    item.setAttribute('href', listadoImagenes[indice])
})
