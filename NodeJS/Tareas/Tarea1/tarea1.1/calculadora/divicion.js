// modulo 4, creamos una funcion que divide dos numeros

function divicion(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

module.exports = divicion;
