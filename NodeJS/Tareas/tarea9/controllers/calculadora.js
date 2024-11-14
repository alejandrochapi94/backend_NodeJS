exports.suma = (req, res) => {
    //Sumar los 2 numeros recibidos en el body con clave valor
    const { a, b } = req.body;
    const result = a + b;
    res.send(`La suma de ${a} y ${b} es ${result}`);
}

exports.resta = (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.send(`La resta de ${a} y ${b} es ${result}`);
}

exports.multiplicacion = (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.send(`La multiplicacion de ${a} y ${b} es ${result}`);
}

exports.division = (req, res) => {
    //validar que b no sea 0
    const { a, b } = req.body;
    if (b === 0) {
        res.status(400).send('No se puede dividir por 0');
        return;
    }
    const result = a / b;
    res.send(`La division de ${a} y ${b} es ${result}`);
}
