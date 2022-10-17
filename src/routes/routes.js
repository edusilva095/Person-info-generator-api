const { Router } = require("express");
const GeneratePersonController = require("../controller/generatePersonController");
const GenerateDocumentController = require("../controller/generateDocumentController");
const GenerateNumberPhoneController = require("../controller/generateNumberPhoneController");

const routes = new Router();

routes.route("/get/random-person").get(GeneratePersonController.randomPerson);

routes.route("/get/random-person-male").get(GeneratePersonController.randomPersonMale);

routes.route("/get/random-person-female").get(GeneratePersonController.randomPersonFemale);

routes.route("/get/generate-rg").get(GenerateDocumentController.generateRandomRg);

routes.route("/get/generate-cpf").get(GenerateDocumentController.generateRandomCpf);

routes.route("/get/generate-land-line").get(GenerateNumberPhoneController.generateRandomNumberLandLine);

routes.route("/get/generate-cell-phone").get(GenerateNumberPhoneController.generateRandomCellPhone);

module.exports = routes;