const fs = require('fs');
const users = [
];

exports.getAllUsers = (req, res) => {

    const ruta = './controllers/datos.json';//"Absoluta"

    fs.readFile(ruta, (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).json({ error: 'Error al leer el archivo' });
        } else{
          
          const users = JSON.parse(data);
          res.json(users);
        }
  });
};

  exports.createUser = (req, res) => {
    //crea un id automáticamente
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  };


 
exports.res = (req, res) => {
    const { a, b } = req.body;
    const r = a - b;
    users.push(r);
    res.json("ya hice la resta");
  };

  // exportamos la el arr
