/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [
  {
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true,
  },
  {
    id: "y123",
    nombre: "Thriller",
    imagen:
      "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true,
  },
  {
    id: "z123",
    nombre: "The wall",
    imagen:
      "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: true,
  },
  {
    id: "f123",
    nombre: "Abbey Road",
    imagen:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false,
  },
  {
    id: "a123",
    nombre: "Origin of Symmetry",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false,
  },
  {
    id: "a1288",
    nombre: "Back in Black",
    imagen:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false,
  },
];

const nombreDeUsuario = document.querySelector(".perfil #nombreUsuario");
console.log(nombreDeUsuario);

const numeroDeAlbumes = document.querySelector(".perfil p #cant-albums");
console.log(numeroDeAlbumes);

const numAlbumesFavoritos = document.querySelector(".perfil p #cant-favoritos");
console.log(numAlbumesFavoritos);


// esto hace que se cargue
// window.addEventListener('load', function() {
// })

/* -------------------------------------------------------------------------- */
/*                    FUNCION: captar el nombre de usuario                    */
/* -------------------------------------------------------------------------- */

const captarNombreDeUsuario = () => {
  const nombreCapturado = prompt("Ingrese su nombre");
  nombreDeUsuario.textContent = nombreCapturado.toUpperCase();
};

captarNombreDeUsuario();

/* -------------------------------------------------------------------------- */
/*                     FUNCION: mostrar datos del usuario                     */
/* -------------------------------------------------------------------------- */
// - contar la cantidad de albumes del array y pintar en el span correspondiente
// - contar la cantidad de favoritos y pintar en el span correspondiente
// - tener en cuenta: usar la palabra en plural solo cuando sea necesario

const contarCantAlbumes = () => {
  const numAlbumes = albumesFamosos.length;
  console.log(numAlbumes);

  numAlbumes == 1 ? numeroDeAlbumes.textContent = `${numAlbumes} album` : numeroDeAlbumes.textContent = `${numAlbumes} albumes`;
  // if (numAlbumes == 1) {
  //   numeroDeAlbumes.textContent = `${numAlbumes} album`;
  // } else {
  //   numeroDeAlbumes.textContent = `${numAlbumes} albumes`;
  // }

};

const contarAlbumesFavoritos = () => {
  contadorAlbumesFav = 0;

  albumesFamosos.forEach((album) => {
    if (album.like == true) {
      contadorAlbumesFav++;
    }
  });

  contadorAlbumesFav == 1 ? numAlbumesFavoritos.textContent = `${contadorAlbumesFav} album favorito` : numAlbumesFavoritos.textContent = `${contadorAlbumesFav} albumes favoritos`
  // if (contadorAlbumesFav == 1) {
  //   numAlbumesFavoritos.textContent = `${contadorAlbumesFav} album favorito`;
  // } else {
  //   numAlbumesFavoritos.textContent = `${contadorAlbumesFav} albumes favoritos`;
  // }

};

contarCantAlbumes();
contarAlbumesFavoritos();

/* -------------------------------------------------------------------------- */
/*                  FUNCION: renderizar tarjetas del albumes                 */
/* -------------------------------------------------------------------------- */
//map, template strings, innerHTML
const ulListadoCovers = document.querySelector('div.listado ul.covers');
console.log(ulListadoCovers);
const covers = document.querySelector('.covers')

const renderizarTarjetas = () => {

  covers.innerHTML = "";

  albumesFamosos.forEach( (album) => {
    ulListadoCovers.innerHTML +=
      `
      <li>
      <img src=${album.imagen} alt=${album.imagen} class="imagenAlbum">
      <p class="nombreAlbum"> ${album.nombre} </p>
        <i onclick="marcarFavorito('${album.id}')" class="fa fa-heart ${album.like ? 'favorito' : ''}"></i> 
      </li>   
    `
  })
}

renderizarTarjetas();


/* -------------------------------------------------------------------------- */
/*                          FUNCION: marcar favorito                          */
/* -------------------------------------------------------------------------- */
// - buscar el album por data-id en el array
// - cambiar el estado del like
// - eliminar el contenido del listadoFavoritos(para no duplicar)
// - volver a renderizar
function marcarFavorito (identificador){
  
  albumesFamosos.forEach( album => {
    if(album.id === identificador){
      // invertimos el valor del like
      album.like = !album.like;
    }
  })
  
  console.log(albumesFamosos);

  renderizarTarjetas();
  contarAlbumesFavoritos()
}