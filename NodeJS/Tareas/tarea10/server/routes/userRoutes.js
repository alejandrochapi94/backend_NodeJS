const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const operacionesController = require('../controllers/operaciones');
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.post('/sum', operacionesController.sum);
router.post('/res', operacionesController.res);
router.post('/mul', operacionesController.mul);
router.post('/div', operacionesController.div);

module.exports = router;
