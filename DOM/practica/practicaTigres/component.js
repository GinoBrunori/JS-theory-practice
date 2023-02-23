const contenedor = document.querySelector(".contenedor");
console.log(contenedor);

const itemComponent = (item) => {
  return `
    <div class= 'item'>
    <img src="${item.imgUrl}">
    <h2> ${item.title} </h2> 
    <p> 
      ${item.description}
    </p>
    </div>
  `;
};

listadoFelinos.forEach((felino) => {
  contenedor.innerHTML += itemComponent(felino);
});

// console.log(listadoFelinos);

/* -------------------------------------------------------------------------- */
// contenedor.innerHTML = listadoFelinos
//   .map((felino) => itemComponent(felino))
//   .join("");


