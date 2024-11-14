const users = []; // Array temporal como "base de datos" (para propósitos de demostración)

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
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Actualizar un usuario por ID
exports.updateUser = (req, res) => {
  /*
  //lista de objetos 
  [
    {id:1, nombre:"Juan", edad:20},
    {id:2, nombre:"Maria", edad:25},
    {id:3, nombre:"Pedro", edad:30}
  ]

  http://localhost:3000/users/2

  req.params.id -> 2 <- es un texto porque está en una ruta 
  parseInt(req.params.id) -> 2 <- es un número entero 

  users.find(u => u.id === parseInt(req.params.id));
  busca un ubjeto u cuando la propiedad del objeto u.id es igual al número entero parseInt(req.params.id)
  
  */
 //user almacena el objeto que coincide con el id
  const user = users.find(u => u.id === parseInt(req.params.id));//esto devuelve el objeto que coincide con el id
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  Object.assign(user, req.body);
  res.json(user);
};

// Eliminar un usuario por ID
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
  users.splice(index, 1);//[1,2,3,4,5] splice(3,2) -> [1,2,5]
  res.json({ message: 'Usuario eliminado' });
};


//las acciones que hará en cada ruta 
