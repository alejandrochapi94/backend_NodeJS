const users = []; // Array temporal como "base de datos" (para propósitos de demostración)

// Obtener todos los usuarios
const fs = require('fs');
const path = require('path');

exports.getAllUsers = (req, res) => {
  //const filePath = path.join(__dirname, 'datos.json');
  const filePath = './controllers/datos.json'; //ruta desde donde se lanza node
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al leer el archivo' });
    } else {
      const users = JSON.parse(data);
      res.json(users);
    }
  });
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Actualizar un usuario por ID
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  Object.assign(user, req.body);
  res.json(user);
};

// Eliminar un usuario por ID
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
  users.splice(index, 1);
  res.json({ message: 'Usuario eliminado' });
};
