// creamos las rutas del metodo fetch

const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController');
const calcController = require('../controllers/calculadora');
//http://localhost:4001/user
router.get('/', userController.getAllUsers);
//http://localhost:4001/user/1
router.get('/:id', userController.getUserById);
//router.post('/', userController.createUser);
router.post('/suma', calcController.suma);
router.post('/resta', calcController.resta);
router.post('/multiplicacion', calcController.multiplicacion);
router.post('/division', calcController.division);
module.exports = router;


