const ModelUser = require("../model");

exports.get = async (req, res) => {
    const respuesta = await ModelUser.find({});
    res.send(respuesta);
};

exports.create = async (req, res) => {
    const respuesta = await ModelUser.create(req.body);
    res.send(respuesta);
};

