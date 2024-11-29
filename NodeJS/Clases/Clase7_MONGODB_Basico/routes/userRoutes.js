const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Rutas para los usuarios
router.get('/', userController.get);
router.get('/:id', userController.getById);
router.post('/', userController.post);
router.put('/:id', userController.put);
router.delete('/:id', userController.delete);

module.exports = router;
