const mongoose = require("mongoose");
const Nome = mongoose.model("nome");
const Sobrenome = mongoose.model("sobrenome");

exports.getRandomNameOfAnyGender = async (countAllDatas, countMale, countFemale) => {
    const random = {
        person: await randomNamesOfAnyGender(countAllDatas),
        pai: await randomNamesMales(countMale),
        mae: await randomNamesFemales(countFemale)
    }
    return random;
}

const randomNamesOfAnyGender = async (countAllDatas) => {
    const names = await Nome.find({});
    return names[Math.floor(Math.random() * await countAllDatas)]
}

const randomNamesMales = async (countMale) => {
    const namesMales = await Nome.find({ "genero": "masculino" });
    return namesMales[Math.floor(Math.random() * await countMale)]
}

const randomNamesFemales = async (countFemale) => {
    const namesFemales = await Nome.find({ "genero": "feminino" });
    return namesFemales[Math.floor(Math.random() * await countFemale)]
}

exports.getRandomSobrenome = async (countSobrenome) => {
    const num = await countSobrenome;
    var randomNumberOne = Math.floor(Math.random() * num);
    var randomNumberTwo = Math.floor(Math.random() * num);
    let firstSobrenome = await Sobrenome.findOne().skip(randomNumberOne);
    let secondSobrenome = await Sobrenome.findOne().skip(randomNumberTwo);
    return `${firstSobrenome.sobrenome} ${secondSobrenome.sobrenome}`
}