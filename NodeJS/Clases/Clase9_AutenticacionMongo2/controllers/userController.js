import ModelUser from '../models/userModel.js';
//const ModelUser = require('../models/userModel');
import  {UserRepository} from '../userRepository.js'; //UserRepository  from '../userRepository.js';
//import userRepository from './userRepository.js';

//Métodos CRUD

const createUser = async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta);
    console.log(body);
};
//Get general
const getAllUsers= async (req, res) => {
    const respuesta = await ModelUser.find({}); 
    res.send(respuesta);
};
//Get para un usuario en específico
const getUserById= async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id); 
    res.send(respuesta);
};
//Actualizar PUT
const updateUser= async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body); 
    res.send(respuesta);
};
//Eliminar un elemento

const deleteUser=async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id}); 
    res.send(respuesta);
};

const login=async (req, res) => {
    const {name, password} = req.body;
    console.log(req.body);
    try {
        const user = await UserRepository.login({name, password});
        res.send({user});
    } catch (error) {
        res.status(401).send({error: error.message});
    }


};

const register=async (req, res) => {
    const {name, password} = req.body;
    console.log(req.body);
    try {
        const user = await UserRepository.create({name, password});
        res.send({user});
    } catch (error) {
        res.status(401).send({error: error.message});
    }

};


export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    login,
    register
}