const express = require("express");
const userController = require("../controller/users.js");
const routes = express.Router();

// CREATE - POST
routes.post("/", userController.createNewUsers);

// READ - GET
routes.get("/", userController.getAllUsers);

// UPDATE - PATCH
routes.patch("/:idUser", userController.updateUsers);

// DELETE
routes.delete("/:idUser", userController.deleteUser);

module.exports = routes;
