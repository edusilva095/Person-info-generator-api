const mongoose = require("mongoose");
const Nome = mongoose.model("nome");
const Sobrenome = mongoose.model("sobrenome");

exports.getRandomName = async (count) => {
    let randomNumber = Math.floor(Math.random() * await count);
    return Nome.findOne().skip(randomNumber);
}

exports.getRandomSobrenome = async (countSobrenome) => {
    const num = await countSobrenome
    var randomNumberOne = Math.floor(Math.random() * num);
    var randomNumberTwo = Math.floor(Math.random() * num);
    let firstSobrenome = await Sobrenome.findOne().skip(randomNumberOne);
    let secondSobrenome = await Sobrenome.findOne().skip(randomNumberTwo);
    return `${firstSobrenome.sobrenome} ${secondSobrenome.sobrenome}`
}