
// capturar eventos en variables 
let idProducto = document.getElementById('id');
let nombreProducto = document.getElementById('nombre');
let proveedorProducto = document.getElementById('proveedor');
let descipcionProducto = document.getElementById('descripcion');
let categoriaProducto =  document.getElementById('categoria');
let stokProductos = document.getElementById('existencia');
let cancelar_Cambios = document.getElementById('cancelar-cambios');
let guardar_Cambios = document.getElementById('guardar-cambios');
let formularioEditarProducto = document.getElementById('editar-producto-form');
let botonCerrar = document.getElementById('volver-lista-pedidos');

// aceder al archivo json
fetch('src/json/productos.json')
    .then(response => response.json())
    .then(productos => {
        console.log(productos);
        (productos);
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
});
// funciones de eventos 
guardar_Cambios.addEventListener('submit', function (evento) {
    evento.preventDefault();
    evento.editarProducto();
});

cancelar_Cambios.addEventListener('click',function(){
   limpiarcampos() ;    
});
// cerrar ventana y volvera la ventana lista de productos
botonCerrar.addEventListener("click", function () {
  window.comunicacion.cerrarEditarProducto();
});
//funcion para editar JSON
function editarProducto() {
  const idProductoValue = parseInt(idProducto.value);
  const productoEditado = {
    cuiProducto: idProducto.Value,
    nombre: nombreProducto.value,
    proveedor: proveedorProducto.value,
    descripcion: descipcionProducto.value,
    categoria: categoriaProducto.value,
    existencia: parseInt(stokProductos.value)
  };

  // encontrar indice del producto json 
  const productIndex = productos.findIndex(p => p.cuiProducto === idProductoValue);
  if (productIndex !== -1) {
    // actualizar el indice
    productos[productIndex] = productoEditado;
    // guardar cambion en json
    fs.writeFile('src/json/productos.json', JSON.stringify(productos), (err) => {
      if (err) {
        console.error('Error al guardar los cambios:', err);
      } else {
        console.log('Cambios guardados exitosamente');
      }
    });
  } else {
    console.error('Producto no encontrado');
  }
}

// funcion validar campos 
function validarCambios(){

}
// funcion para limpiar el formularios 
function limpiarcampos() {
  nombreProducto.value = '';
  proveedorProducto.value = '';
  descipcionProducto.value = '';
  categoriaProducto.value = '';
  stokProductos.value = '';
  
  // crear el cuadro de alerta 
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert');
  alertElement.textContent = 'Cambios cancelados';
  alertElement.style.display = 'block';
  // insertar la alerta 
  document.body.appendChild(alertElement);
  // cerrar alerta despues de 2 segundos 
  setTimeout(() => {
    alertElement.style.display = 'none';
    //cerrar automaticamente la alerta
    setTimeout(() => {
        alertElement.remove();
    }, 500);
  }, 2000);
};

