const {ventas, Venta} = require("./modulo");

const venta1 = new Venta();
//venta1.calculaventastotalesmes("01")
//venta1.calculaventastotalesmes("02")
//console.log(venta1.obtenerproductomasvendido());

venta1.calcularpromedioventasdiarias("01");
