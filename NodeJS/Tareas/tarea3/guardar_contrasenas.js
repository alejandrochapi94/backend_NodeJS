//importar el modulo de generador de contraseñas
const { generarContrasena } = require('./generador');



//funcion que se encarga de guardar las contraseñas en un archivo json
function guardarContrasena() {
    const contrasena= generarContrasena(12);
    const fs = require('fs');
    let data = [];
    try {
        // Intenta leer el archivo existente
        data = JSON.parse(fs.readFileSync('contrasenas.json', 'utf8'));
    } catch (error) {
        // Si el archivo no existe o está vacío, comenzamos con un array vacío
        data = [];
    }
    
    data.push({ contrasena });
    fs.writeFileSync('contrasenas.json', JSON.stringify(data, null, 2));
}


module.exports = {
    guardarContrasena
}

//Llamar al archivo guardar_archivo desde el main (Para que se guarden los datos en el archivo json)
