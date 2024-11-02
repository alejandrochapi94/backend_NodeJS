const {paquetes, Camion} = require("./logistica");

const camion1 = new Camion("123456", 5);
camion1.cargarPaquete([{id: 3, origen: "Bogota", destino: "Medellin", estado: "En tránsito"},
    {id: 4, origen: "Bogota", destino: "Cali", estado: "Entregado"}]);

console.log(camion1.lista_paquetes);