const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const inicio_registro = require("../controller/inicio_registro");

router.get("/", userController.get);
router.post("/", userController.create);
router.post("/login", inicio_registro.login);
router.post("/register", inicio_registro.register);
module.exports = router;
