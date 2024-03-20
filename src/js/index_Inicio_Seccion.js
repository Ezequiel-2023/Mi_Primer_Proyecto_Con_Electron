// Variables para el formulario index js
const formulario = document.getElementById("login-form");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const registrarUsuario = document.getElementById('registroUsuario');

//registrar usuario
registrarUsuario.addEventListener('click', function () {
    window.comunicacion.abrirRegistroUsuario();
});                     

// Expresiones regulares para usuario y contraseña
const regexUsuario = /^[a-zA-Z0-9_-]{4,16}$/;
const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,12}$/;

// Evento de submit para el formulario
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    // Validar usuario y contraseña con expresiones regulares
    if (regexUsuario.test(usuario.value) && regexPassword.test(password.value)) {
        alert("Bienvenido " + usuario.value);
        // Aquí "b) Una ventana que contenga una lista de los productos actuales"
        window.comunicacion.registroValido([usuario.value, password.value]);
    } else {
        alert("Usuario o contraseña incorrectos. Verifica las reglas de validación.");
    }
});