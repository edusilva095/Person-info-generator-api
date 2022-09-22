const { Router } = require("express");
const Controller = require("../controller/controller");

const routes = new Router();

routes.route("/register/nome").post(Controller.registerNome);

routes.route("/get/nome").get(Controller.getAllNome);

routes.route("/get/sobrenome").get(Controller.getAllSobrenome);

routes.route("/register/sobrenome").post(Controller.registerSobrenome);

module.exports = routes;

