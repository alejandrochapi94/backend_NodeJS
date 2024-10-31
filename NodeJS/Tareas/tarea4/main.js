console.log("Hola tarea 4");

const Usuario = require('./clase_usuarios');

const usuario = new Usuario("Alejandro", "alejandro@gmail.com", "contraseña123");
const Usuario2 = new Usuario("Juan", "juan@gmail.com", "contraseña456");
usuario.mostrarInfo();
Usuario2.mostrarInfo();

