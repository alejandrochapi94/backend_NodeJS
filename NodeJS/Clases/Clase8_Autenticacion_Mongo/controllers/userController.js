
const ModelUser = require('../models/userModel');

//Métodos CRUD
exports.createUser = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
    console.log(body);
};
//Get general
exports.getAllUsers= async (req, res) => {
    const respuesta = await ModelUser.find({}); 
    res.send(respuesta);
};
//Get para un usuario en específico
exports.getUserById= async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id); 
    res.send(respuesta);
};
//Actualizar PUT
exports.updateUser= async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body); 
    res.send(respuesta);
};
//Eliminar un elemento

exports.deleteUser=async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id}); 
    res.send(respuesta);
};