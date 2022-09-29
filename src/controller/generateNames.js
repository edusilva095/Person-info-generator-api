const mongoose = require("mongoose");
const Name = mongoose.model("name");
const Surname = mongoose.model("surname");

exports.getRandomNameOfAnyGender = async (countAllDatas, countMale, countFemale) => {
    const random = {
        person: await randomNamesOfAnyGender(countAllDatas),
        pai: await randomNamesMales(countMale),
        mae: await randomNamesFemales(countFemale)
    }
    return random;
}

const randomNamesOfAnyGender = async (countAllDatas) => {
    const names = await Name.find({});
    return names[Math.floor(Math.random() * await countAllDatas)];
}

const randomNamesMales = async (countMale) => {
    const namesMales = await Name.find({ "gender": "male" });
    return namesMales[Math.floor(Math.random() * await countMale)];
}

const randomNamesFemales = async (countFemale) => {
    const namesFemales = await Name.find({ "gender": "female" });
    return namesFemales[Math.floor(Math.random() * await countFemale)];
}

exports.getRandomSurname = async (countSurname) => {
    const count = await countSurname;
    const randomNumberMiddleSurnameFather = Math.floor(Math.random() * count);
    const randomNumberLastSurnameFather = Math.floor(Math.random() * count);
    const randomNumberMiddleSurnameMother = Math.floor(Math.random() * count);
    const randomNumberLastSurnameMother = Math.floor(Math.random() * count);

    const randomSurname = {
        middleSurnameFather: await Surname.findOne().skip(randomNumberMiddleSurnameFather),
        lastSurnameFather: await Surname.findOne().skip(randomNumberLastSurnameFather),
        middleSurnameMother: await Surname.findOne().skip(randomNumberMiddleSurnameMother),
        lastSurnameMother: await Surname.findOne().skip(randomNumberLastSurnameMother)
    }
    return randomSurname;
}