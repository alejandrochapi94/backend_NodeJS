const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/lista", userController.getLista);
router.post("/lista", userController.createUser);

module.exports = router;