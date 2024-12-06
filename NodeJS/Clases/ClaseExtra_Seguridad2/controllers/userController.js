const users = []; // Array temporal como "base de datos" (para propósitos de demostración)

// Obtener todos los usuarios
const fs = require('fs');
const path = require('path');
const filePath = './controllers/datos.json'; //ruta desde donde se lanza node

exports.getAllUsers = (req, res) => {
  //const filePath = path.join(__dirname, 'datos.json');
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
  //leer datos desde el archivo datos.json con readfile
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al leer el archivo' });
    } else {
      const users = JSON.parse(data);
      const user = users.find(u => u.id === parseInt(req.params.id));
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(user);
    }
  })


};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  // Leer datos desde el archivo datos.json con readfile, convertir a objeto, llenar con el nuevo usuario y guardarlo en el archivo
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al leer el archivo' });
    } else {
      const users = JSON.parse(data);
      const newUser = { id: users.length + 1, ...req.body };
      users.push(newUser);
      fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error al guardar el usuario' });
        } else {
          res.json(newUser);
        }
      });
    }
  });
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
