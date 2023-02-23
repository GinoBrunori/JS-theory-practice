
/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    legal: false
};

const errores = {
    email: 'Email no válido o incorrecto.',
    password: 'Contraseña no válida o incorrecta.',
    legal: 'Es necesario aceptar los términos y condiciones.',
    erroresPresentes: ['Email no válido o incorrecto.','Email no válido o incorrecto.']
};

/* ---------------------------------- nodos --------------------------------- */

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputLegal = document.querySelector('#legal');
const cajaErrores = document.querySelector('.errores');
const formulario = document.forms[0];

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log(evento);

    // actualizo el estado de la pantalla con los datos ya normalizados 👇
    estadoUsuario.email = normalizarTexto(inputEmail.value);
    estadoUsuario.password = normalizarContrasenia(inputPassword.value);
    estadoUsuario.legal = inputLegal.checked;

    // validar campos 👇


    //renderizar cambios 👇
    cajaErrores.innerHTML = listarErrores(errores.erroresPresentes).join('')

    console.log(estadoUsuario);
    
    // Limpiamos los ultimos errores
    errores.erroresPresentes = []
});


/* -------------------------------------------------------------------------- */
/*                                RENDERIZADOS                                */
/* -------------------------------------------------------------------------- */
function listarErrores(listado) {
    const contenido = [];

    listado.forEach( item => {
        contenido.push(`<p><small>${item}</small></p>`);
    })

    return contenido;
}



/* -------------------------------------------------------------------------- */
/*                              FUNCIONES UTILES                              */
/* -------------------------------------------------------------------------- */
function normalizarTexto(texto) {
    // paso todo a minusculas y quito espacios sobrantes 👇
    return texto.toLowerCase().trim();
}
function normalizarContrasenia(texto) {
    // quito espacios sobrantes 👇
    return texto.trim();
}
