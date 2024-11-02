//Define un array de objetos, donde cada objeto representa una venta con la siguiente información: { "producto": (string), "precioUnitario": (número), "cantidad": (número), "fecha": (string, formato "AAAA-MM-DD") }.

const ventas = [
    {producto: "Producto 1", precioUnitario: 10000, cantidad: 1, fecha: "2024-01-01"},
    {producto: "Producto 2", precioUnitario: 20000, cantidad: 2, fecha: "2024-01-01"},
  
];

let total = 0;
class Venta{

    calculaventastotalesmes(mes){
      for (let i = 0; i < ventas.length; i++){
        const mesVenta = ventas[i].fecha.split('-')[1];
        if (mesVenta === mes){
            console.log(ventas[i]);
            total += (ventas[i].precioUnitario * ventas[i].cantidad)/ventas.length;
            console.log(total);
            
        }
      }
      //almacena los resultados de las ventas totales en el archivo resultados.txt
          const fs = require("fs");
        fs.appendFileSync("resultados.txt", '\nTotal de ventas del mes ' + mes +' : ' + total);
          //fs.appendFileSync("resultados.txt", JSON.stringify( ' \nTotal de ventas del mes ' + mes +' : ' + total));
    }

    obtenerproductomasvendido(){
      const cantidad = []
      for (let i = 0; i < ventas.length; i++){
        cantidad.push(ventas[i].cantidad);

    }
    console.log(Math.max(...cantidad));

    } 

    calcularpromedioventasdiarias(mes){
      let total = 0;
      let promedio = 0;
      for (let i = 0; i < ventas.length; i++){
        const mesVenta = ventas[i].fecha.split('-')[1];
        if (mesVenta === mes){
            total += (ventas[i].precioUnitario * ventas[i].cantidad)
            promedio = total / ventas.length;
        }
      }
      console.log(promedio);
      const fs = require("fs");
      fs.appendFileSync("resultados.txt", '\nPromedio de ventas diarias del mes ' + mes +' : ' + promedio);
    }


}

module.exports = {ventas, Venta};