let confirmarPedido = document.getElementById('confirmar-pedido');
let proveedor = document.getElementById('proveedor').value;
let cantidad = document.getElementById('cantidad').value;

confirmarPedido.addEventListener('click', function () {
    if (validarCampos()) {
        alert("Pedido realizado con éxito");
        window.comunicacion.volverAListaProducto();
    }
});
// validar proveedor y cantidad sean numeros  enteros positivos
function validarCampos() {
    if (proveedor.trim() === '') {
        alert("Por favor, ingrese el proveedor");
        return false;
    }
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida");
        return false;
    }
    return true;
}
