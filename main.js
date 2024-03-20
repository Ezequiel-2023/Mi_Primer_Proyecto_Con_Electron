// archivo main y controlador  de la app  y de las ventanas 
// importamos modulos 
// en la ventana inicio de secion colocar el siguiente usuario y contraseña 
// USUARIO: Juan
//CONTRASEÑA: Usuario_1 

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const mysql = require('mysql2');
//incriptacion de contraseña
const  bcrypt  =  require ( 'bcrypt' ) ; 
const  salRondas  =  10 ; 

//variables para nuestras funciones 
let ventanaInicioSesion;
let ventanaProductos;
let ventanaEditarProducto;
let ventanaSolicitarProducto;
let ventanaResigstroUsuario
// ventana para el inicio de seccion
function createWindowInicioSesion() {
    ventanaInicioSesion = new BrowserWindow({
        width: 250,
        height: 400,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
     // Cargar el archivo inicio_sesion.html en la ventana.
    ventanaInicioSesion.loadFile('index.html');
}
// ventana para registro dde usuario
function  createWindowsCrearUsuario() {
   ventanaResigstroUsuario = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
     // Cargar el archivo inicio_sesion.html en la ventana.
    ventanaResigstroUsuario.loadFile('registroUsuario.html');
}
// ventana para ver la lista de productos 
function createWindowProductos() {
    ventanaProductos = new BrowserWindow({
        width: 1050,
        height: 800,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    // Cargar el archivo lista_productos.html en la ventana.
    ventanaProductos.loadFile('lista_productos.html');
    // Evento que se ejecuta cuando la ventana es cerrada.
}
// ventana para editar lista de productos 
function createWindowEditarProducto() {
    ventanaEditarProducto = new BrowserWindow({
        width: 450,
        height: 650,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    ventanaEditarProducto.loadFile('editar_producto.html');
}

// ventana para solicitar pedidos
function createWindowSolicitarPedido () {
    ventanaSolicitarProducto = new BrowserWindow({
        width: 450,
        height: 650,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    });
    // Cargar el archivo lista_productos.html en la ventana.
    ventanaSolicitarProducto.loadFile('pedido.html');
    // Evento que se ejecuta cuando la ventana es cerrada.
}
// redireccion para la ventana de registro de usuario
ipcMain.on('abrirRegistroUsuario', function(){
    createWindowsCrearUsuario();
    ventanaInicioSesion.close();
});
// regresa al inicio de seccion despues de registrar al usuario
ipcMain.on('volverAInicioSecion', function(){
    createWindowInicioSesion()
    ventanaResigstroUsuario.close();  
});
// validar al usuario
ipcMain.on('registroValido', function (event, args) {
    console.log(args);
    //revisando si el usuario esta en la base de datos 
    conexion.promise().query("SELECT * FROM empleado WHERE nombre = ?",
      [args.email]
    ).then(([results, fields])=> {
      if (results.length > 0) {
        const user = results[0];
        // comparando contraseña
        if (bcrypt.compareSync(args.password, user.pasword)) {
          createWindowProductos();
          ventanaInicioSesion.close();
        } else {
          console.log("Contraseña incorrecta");
        }
      } else {
        console.log("No hay coincidencia");
      }
    })
    .catch((err)=>{
        console.log(err)
        console.log("Usuario No existe")
    })
});

//registrar usuario
ipcMain.on('nuevoRegistro', function(event, args){
    const { nombre, apellido, TELEFONO, email, pasword } = args;
    conexion.promise().query('INSERT INTO empleado(nombre, apellido, TELEFONO, email, pasword) VALUES(?,?,?,?,?)',
    [nombre, apellido, TELEFONO, email, pasword])
       .then(([results, fields])=>{
        console.log(results)
        console.log("se realizo el registro")
       })
       .catch((err)=>{
        console.log(err)
        console.log("no se realizo el registro")

       })
 });
// cierre de secion 
ipcMain.on('cerrarSesion', function () {
    ventanaProductos.close();
    createWindowInicioSesion();
});
// editar producto
ipcMain.on('abrirEditarProducto', function () {
    createWindowEditarProducto();
});
// solicitar producto
ipcMain.on('abrirSolicitarProducto', function () {
    createWindowSolicitarPedido();
});
// editar producto
ipcMain.on('cerrarEditarProducto', function(){
    ventanaEditarProducto.close();
});
// volver a la lista de producto
ipcMain.on('volverAListaProducto', function(){
    ventanaSolicitarProducto.close()
});

// Se ejecuta cuando la aplicación está lista.
app.whenReady().then(createWindowInicioSesion);

// coneccion base de datos mysql
const conexion =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Ardi_192*',
    database: 'inventario',
});
// consulta  a la bd para obtener usuarios
conexion.query(
    "SELECT * FROM empleado",
    function (err, results, fields){
        if(err){
            console.log(err)// manejar el error 
        }
        console.log(results); //los resultados contienen filas devueltas por el servidor
        console.log(fields);  // los campos contienen datos 
    });


  