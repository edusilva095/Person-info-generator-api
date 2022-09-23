const { Router } = require("express");
const Controller = require("../controller/controller");

const routes = new Router();

routes.route("/get/random-person").get(Controller.randomPerson);

module.exports = routes;

