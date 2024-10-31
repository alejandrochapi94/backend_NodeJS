


console.log("Hola Mundo");
console.log("Hola Mundo 2");

const suma = require('./calculadora/suma');
const resta = require('./calculadora/resta');
const multiplicacion = require('./calculadora/multiplicacion');
const divicion = require('./calculadora/divicion');


function calculadora() {
    console.log(suma(1, 2));
    console.log(resta(1, 2));
    console.log(multiplicacion(1, 5));
    console.log(divicion(1, 5));

}

calculadora();
