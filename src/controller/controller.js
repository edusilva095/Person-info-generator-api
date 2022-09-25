const mongoose = require("mongoose");
const Nome = mongoose.model("nome");
const Sobrenome = mongoose.model("sobrenome");
const ListCitys = require("./listCitys");
const GenerateNames = require("./generateNames");
const GenerateCpf = require("./generateDocument");
const GenerateDate = require("./generateDate");
const TypeBlood = require("./typeBlood");
const Sign = require("./sign");
const GenerateNumberPhone = require("./generateNumberPhone");

exports.randomPerson = (req, res) => {
    const countAllDatas = Nome.countDocuments({});
    const countMale = Nome.where({ "genero": "masculino" }).countDocuments();
    const countFemale = Nome.where({ "genero": "feminino" }).countDocuments();
    const countSobrenome = Sobrenome.countDocuments({});
    const date = GenerateDate.nascimento();
    GenerateNames.getRandomNameOfAnyGender(countAllDatas, countMale, countFemale).then((random) => {
        GenerateNames.getRandomSobrenome(countSobrenome).then((sobrenome) => {
            ListCitys.listCitys().then((city) => {
                const selectCity = city.data[Math.floor(Math.random() * city.data.length)].microrregiao;
                const person = {
                    nome: `${random.person.nome} ${sobrenome.lastSobrenomeMother.sobrenome} ${sobrenome.lastSobrenomeFather.sobrenome}`,
                    cpf: GenerateCpf.generateCpf(),
                    rg: GenerateCpf.generateRg(),
                    sexo: random.person.genero,
                    nascimento: date,
                    signo: Sign.sign(date),
                    altura: (Math.random() * (1.90 - 1.55) + 1.55).toFixed(2), // definindo a altura mínima com 1.55 e altura máxima com 1.90
                    peso: (Math.random() * (90 - 60) + 60).toFixed(2), // definindo o peso mínimo com 60 kg e peso máximo com 90 kg
                    tipo_sanguineo: TypeBlood.TypeBloodArray(),
                    Estado: selectCity.mesorregiao.UF.nome,
                    cidade: selectCity.nome,
                    telefone: GenerateNumberPhone.phone(selectCity),
                    celular: "",
                    mae: `${random.mae.nome} ${sobrenome.middleSobrenomeMother.sobrenome} ${sobrenome.lastSobrenomeMother.sobrenome}`,
                    pai: `${random.pai.nome} ${sobrenome.middleSobrenomeFather.sobrenome} ${sobrenome.lastSobrenomeFather.sobrenome}`,
                }
                res.json(person);
            }).catch((error) => {
                res.send(error);
            })
        }).catch((error) => {
            res.send(error);
        })
    }).catch((error) => {
        res.send(error);
    })
}