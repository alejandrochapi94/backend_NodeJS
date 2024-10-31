// crear una clase usuario con las propiedades nombre, email y contraseña
// el constructor debe recibir estos valores y asignarlos a las propiedades del objeto
// definir un metodo mostrarInfo() que muestre en consola el nombre y el email del usuario

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    }
}   

module.exports = Usuario;
