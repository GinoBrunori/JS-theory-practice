/* --------------------------- button back usuario -------------------------- */
const buttonVolverUser = document.querySelector('.button-volver-usuario');
console.log(buttonVolverUser);

buttonVolverUser.addEventListener('click', function(e){
    console.log(e)
    location.replace('./index.html')
})