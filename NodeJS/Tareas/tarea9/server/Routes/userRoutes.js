//creamos las rutas
const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

module.exports = router;