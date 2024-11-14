const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para los usuarios
router.get('/', userController.getAllUsers);//nada
router.get('/:id', userController.getUserById);//1 registro
router.post('/', userController.createUser);// enviar algo
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

//rutas disponibles en el servidor