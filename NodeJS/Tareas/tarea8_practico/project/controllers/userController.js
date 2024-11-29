const users = [{"nombre":"elie", "pwd": "1234"}]; // Array temporal como "base de datos" (para propósitos de demostración)

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  //crea un id automáticamente
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