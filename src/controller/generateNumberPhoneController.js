const ListCities = require("./listCities");
const GenerateNumberPhone = require("./generateNumberPhone");

exports.generateRandomNumberLandLine = (req, res) => {
    ListCities.listCities().then((city) => {
        const numberLandline = { telefone: GenerateNumberPhone.generateNumberLandline(city.ddd) }
        res.json(numberLandline);
    }).catch((error) => {
        res.send(error);
    })
}

exports.generateRandomCellPhone = (req, res) => {
    ListCities.listCities().then((city) => {
        const numberCellPhone = { celular: GenerateNumberPhone.generateNumberCellPhone(city.ddd) }
        res.json(numberCellPhone);
    }).catch((error) => {
        res.send(error);
    })
}