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
    return names[Math.floor(Math.random() * await countAllDatas)];
}

const randomNamesMales = async (countMale) => {
    const namesMales = await Nome.find({ "genero": "masculino" });
    return namesMales[Math.floor(Math.random() * await countMale)];
}

const randomNamesFemales = async (countFemale) => {
    const namesFemales = await Nome.find({ "genero": "feminino" });
    return namesFemales[Math.floor(Math.random() * await countFemale)];
}

exports.getRandomSobrenome = async (countSobrenome) => {
    const count = await countSobrenome;
    const randomNumberMiddleSobrenomeFather = Math.floor(Math.random() * count);
    const randomNumberLastSobrenomeFather = Math.floor(Math.random() * count);
    const randomNumberMiddleSobrenomeMother = Math.floor(Math.random() * count);
    const randomNumberLastSobrenomeMother = Math.floor(Math.random() * count);

    const randomSobrenome = {
        middleSobrenomeFather: await Sobrenome.findOne().skip(randomNumberMiddleSobrenomeFather),
        lastSobrenomeFather: await Sobrenome.findOne().skip(randomNumberLastSobrenomeFather),
        middleSobrenomeMother: await Sobrenome.findOne().skip(randomNumberMiddleSobrenomeMother),
        lastSobrenomeMother: await Sobrenome.findOne().skip(randomNumberLastSobrenomeMother)
    }
    return randomSobrenome;
}