// creamos una clase para el inventario con los siguientes atributos: id, nombre, precio, cantidad
class Inventario {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    decirDatos(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y una cantidad de ${this.cantidad}`);
    }
    // creamos un metodo para agregar un producto al inventario
    agregarProducto() {
        const fs = require('fs');
        let lista_datos = [];
        
        // Verificar si el archivo existe y leer datos existentes
        if (fs.existsSync('datos.json')) {
            const datos_existentes = fs.readFileSync('datos.json', 'utf8');
            lista_datos = JSON.parse(datos_existentes);
        }
        console.log(lista_datos, typeof lista_datos);
        // Agregar el nuevo producto
        lista_datos.push(this);
        
        // Guardar la lista actualizada
        fs.writeFileSync('datos.json', JSON.stringify(lista_datos));
    }

    actualizarCantidad(id, nuevaCantidad) {
        const fs = require('fs');
        const lista_datos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));
        lista_datos.forEach(producto => {
            if (producto.id === id) { producto.cantidad = nuevaCantidad; }
            
        });
        fs.writeFileSync('datos.json', JSON.stringify(lista_datos));
    }

    obtenerValorTotalInventario() {
        const fs = require('fs');
        const lista_datos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));
        let valorTotal = 0;
        lista_datos.forEach(producto => { valorTotal += producto.precio * producto.cantidad; });
        return valorTotal;
    }
}

module.exports = Inventario;
