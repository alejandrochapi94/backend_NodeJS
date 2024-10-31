//Módulo generador (No va a ser llamado desde el main)


// funacion que se encarga de generar contraseñas aleatorias con letras, numeros y simbolos
function generarContrasena(longitud) {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const caracteres = letras + mayusculas + numeros + simbolos;
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }
    
    return contrasena;
}

module.exports = {
    generarContrasena
}
