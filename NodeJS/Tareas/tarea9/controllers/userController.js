const users = []; //para almacenar los usuarios 

exports.getAllUsers = (req, res) => {
    res.json(users); //retorna los usuarios en formato json}
}

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
}

exports.createUser = (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    //res.status(201);
    //res.send(newUser);
    //estamos enviando un texto con el objeto newUser (esto no funciona)
    //res.send(`Usuario creado exitosamente ${newUser}`);
    //enviamos uno que sí funciona
    //res.json(newUser);
    res.status(201).json(newUser);
    console.log(newUser)
}

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
}




