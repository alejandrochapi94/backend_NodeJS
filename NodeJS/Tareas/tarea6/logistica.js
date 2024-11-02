// Define un diccionario de "paquetes" con el formato: { "id": (número), "origen": (string), "destino": (string), "estado": (string, por ejemplo: "En tránsito", "Entregado") }.

const paquetes = [
    {id: 1, origen: "Bogota", destino: "Medellin", estado: "En tránsito"},
    {id: 2, origen: "Bogota", destino: "Cali", estado: "Entregado"},
];


// creamos la clase camion

class Camion{
    constructor(matricula, capacidad){
        this.matricula = matricula;
        this.capacidad = capacidad;
        this.lista_paquetes = [];
      
    }

    cargarPaquete(paquete){ //{id, nombre, destino, estado} (de uno en uno)
        if (this.capacidad > this.lista_paquetes.length){ //esta vacío
            this.lista_paquetes.push(paquete);
        }else{
            console.log("No hay espacio en el camion");
        }
    }

    descargarPaquete(id){
        this.lista_paquetes = this.lista_paquetes.filter(paquete => paquete.id !== id);
    }       

}

module.exports = {paquetes, Camion};



