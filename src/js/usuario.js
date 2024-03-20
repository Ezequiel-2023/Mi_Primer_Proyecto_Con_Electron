const form = document.getElementById('registroForm');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const password = document.getElementById('password');

const regexUsuario = /^[a-zA-Z0-9_-]{4,16}$/;
const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,12}$/;

form.addEventListener('click', function(){
    const encryptedPassword = bcrypt.hashSync(password.value, 10);
    if (validarDatos(nombre.value, apellido.value, telefono.value, email.value, encryptedPassword)) {
        window.comunicacion.nuevoRegistro();
        window.comunicacion.volverAInicioSecion();
    }
});

function validarDatos(nombre, apellido, telefono, email, password) {
    if (!regexUsuario.test(nombre) || !regexUsuario.test(apellido)) {
        alert('El nombre y apellido deben tener entre 4 y 16 caracteres alfanuméricos.');
        return false;
    }

    if (!regexTelefono.test(telefono)) {
        alert('El teléfono debe tener solo números.');
        return false;
    }

    if (!regexEmail.test(email)) {
        alert('El email debe tener un formato válido. ejemplo@gamil.com');
        return false;
    }

    if (!regexPassword.test(password)) {
        alert('La contraseña debe tener entre 8 y 12 caracteres, al menos un dígito y al menos un carácter especial.');
        return false;
    }

    return true;
};
