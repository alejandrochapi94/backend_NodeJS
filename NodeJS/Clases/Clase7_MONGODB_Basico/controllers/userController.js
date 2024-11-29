const ModelUser = require('./model');

// Crear usuario
exports.post = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
    console.log(body);
};

// Obtener todos los usuarios
exports.get = async (req, res) => {
    const respuesta = await ModelUser.find({});
    res.send(respuesta);
};

// Obtener un usuario por ID
exports.getById = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id);
    res.send(respuesta);
};

// Actualizar usuario
exports.put = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({ _id: id }, body, { new: true });
    res.send(respuesta);
};

// Eliminar usuario
exports.delete = async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id });
    res.send(respuesta);
};
