const fs = require('fs');

function crearArchivo() {

fs.writeFile('archivo.json', '', (err)=>{
    if (err) throw err;
    console.log('Archivo creado exitosamente');

});

console.log('Archivo creado exitosamente');

}

module.exports = crearArchivo;

