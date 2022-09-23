const mongoose = require("mongoose");
const Nome = mongoose.model("nome");
const Sobrenome = mongoose.model("sobrenome");
const axios = require("axios");
const ApiIbge = require("./api_ibge");
const GetDatasDb = require("./getDatasDb");
const GenerateCpf = require("./generateDocument");
const GenerateDate = require("./generateDate");
const Sign = require("./sign");

exports.randomPerson = (req, res) => {
    const count = Nome.countDocuments({});
    const countSobrenome = Sobrenome.countDocuments({});
    const date = GenerateDate.nascimento();
    GetDatasDb.getRandomName(count).then((name) => {
        GetDatasDb.getRandomSobrenome(countSobrenome).then((sobrenome) => {
            const person = {
                nome: `${name.nome} ${sobrenome}`,
                cpf: GenerateCpf.generateCpf(),
                rg: GenerateCpf.generateRg(),
                sexo: name.genero,
                nascimento: date,
                signo: Sign.sign(date),
                mae: `${name.nome} ${sobrenome}`,
                pai: `${name.nome} ${sobrenome}`,
    
            }
            res.json(person);
        }).catch((error) => {
            res.send(error);
        })
    }).catch((error) => {
        res.send(error);
    })
}