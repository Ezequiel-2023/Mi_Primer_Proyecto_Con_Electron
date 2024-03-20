// varriables para capturar eventos 
const cerrarSesionButton = document.getElementById("cerrar-sesion-button");
const productosTable = document.getElementById("productosTable");
//cerrar secion
cerrarSesionButton.addEventListener('click', function () {
    window.comunicacion.cerrarSesion();
});
// Obtener datos JSON desde el servidor
fetch('src/json/productos.json')
    .then(response => response.json())
    .then(productos => {
        console.log(productos);
        mostrarProductos(productos);
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });

function mostrarProductos(productos) {
    // interar sobre json y agregar filas 
    productos.forEach(producto => {
        const fila = document.createElement("tr"); 
        let estiloFondo = '';
        if (producto.stock < 10) {
            estiloFondo = 'background-color: red;';
        } else if (producto.stock > 10) {
            estiloFondo = 'background-color: yellow;';
        }
        fila.innerHTML = `
            <td>${producto.cuiProducto}</td>
            <td>${producto.nombre}</td>
            <td>${producto.proveedor}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.categoria}</td>
            <td>${producto.stock}</td>
            <td>
                <button class="product-button" data-action="edit">Editar</button>
                <button class="product-button" data-action="order">Solicitar pedido</button>
            </td>`;
        fila.setAttribute('style', estiloFondo); // Agregar el estilo de fondo como atributo
        productosTable.appendChild(fila);
    });
};

// funcion para manejar los eventos de clik de cada boton 
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('product-button')) {
        const cui = event.target.dataset.cui;
        if (event.target.dataset.action === 'edit') {
            window.comunicacion.abrirEditarProducto(cui);
        } else if (event.target.dataset.action === 'order') {
            window.comunicacion.abrirSolicitarProducto(cui);
        }
    }
});