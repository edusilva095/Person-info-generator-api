const mongoose = require("mongoose");
const Name = mongoose.model("name");
const Surname = mongoose.model("surname");
const ListCities = require("./listCities");
const GenerateNames = require("./generateNames");
const generateDocument = require("./generateDocument");
const GenerateDate = require("./generateDate");
const TypeBlood = require("./typeBlood");
const Sign = require("./sign");
const GenerateNumberPhone = require("./generateNumberPhone");

exports.randomPerson = (req, res) => {
    const countAllDatas = Nome.countDocuments({});
    const countMale = Name.where({ "gender": "male" }).countDocuments();
    const countFemale = Name.where({ "gender": "female" }).countDocuments();
    const countSobrenome = Surname.countDocuments({});
    const date = GenerateDate.nascimento();
    GenerateNames.getRandomNameOfAnyGender(countAllDatas, countMale, countFemale).then((random) => {
        GenerateNames.getRandomSurname(countSobrenome).then((sobrenome) => {
            ListCities.listCities().then((city) => {
                const person = {
                    nome: `${random.person.nome} ${sobrenome.lastSobrenomeMother.sobrenome} ${sobrenome.lastSobrenomeFather.sobrenome}`,
                    cpf: generateDocument.generateCpf(city.state),
                    rg: generateDocument.generateRg(),
                    sexo: random.person.genero,
                    nascimento: date,
                    signo: Sign.sign(date),
                    altura: (Math.random() * (1.90 - 1.55) + 1.55).toFixed(2), // definindo a altura mínima com 1.55 e altura máxima com 1.90
                    peso: (Math.random() * (90 - 60) + 60).toFixed(2), // definindo o peso mínimo com 60 kg e peso máximo com 90 kg
                    tipo_sanguineo: TypeBlood.TypeBloodArray(),
                    Estado: city.state,
                    cidade: city.city,
                    telefone: GenerateNumberPhone.generateNumberLandline(city.ddd),
                    celular: GenerateNumberPhone.generateNumberCellPhone(city.ddd),
                    mae: `${random.mae.nome} ${sobrenome.middleSobrenomeMother.sobrenome} ${sobrenome.lastSobrenomeMother.sobrenome}`,
                    pai: `${random.pai.nome} ${sobrenome.middleSobrenomeFather.sobrenome} ${sobrenome.lastSobrenomeFather.sobrenome}`,
                }
                res.json(person);
            }).catch((error) => {
                console.log(error)
                res.send(error);
            })
        }).catch((error) => {
            console.log(error)
            res.send(error);
        })
    }).catch((error) => {
        console.log(error)
        res.send(error);
    })
}