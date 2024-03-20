// interfaces para la comunicacion de ventanas  "archivo preload.js " - "ventana principal index.html"

const { contextBridge, ipcRenderer } = require('electron');
const bcrypt = require('bcrypt');

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        registroValido: (datos) => ipcRenderer.send('registroValido', datos),
        cerrarSesion: () => ipcRenderer.send('cerrarSesion'),
        abrirEditarProducto: () => ipcRenderer.send('abrirEditarProducto'),
        abrirSolicitarProducto: () => ipcRenderer.send('abrirSolicitarProducto'),
        cerrarEditarProducto: () => ipcRenderer.send('cerrarEditarProducto'),
        volverAListaProducto: () => ipcRenderer.send('volverAListaProducto'),
        abrirRegistroUsuario: () => ipcRenderer.send('abrirRegistroUsuario'),
        volverAInicioSecion: () => ipcRenderer.send('volverAInicioSecion '),
        nuevoRegistro: (datos) => { const hashedPassword = bcrypt.hashSync(datos.password, salRondas);
            ipcRenderer.send('nuevoRegistro', { ...datos, password: hashedPassword });
        }
    }
    
);