const { Router } = require("express");
const Controller = require("../controller/controller");

const routes = new Router();

routes.route("/get/random-person").get(Controller.randomPerson);

routes.route("/get/random-person-male").get(Controller.randomPersonMale);

routes.route("/get/random-person-female").get(Controller.randomPersonFemale);

module.exports = routes;