import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
//const userController = require('../controllers/userController');

// Rutas para los usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/register', userController.register);
router.post('/login', userController.login);
//router.post('/logout', userController.logout);
//router.post('/protected', userController.protected);

export default router;
//module.exports = router;