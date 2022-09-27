const axios = require("axios");

exports.generateNumberLandline = (areaCode) => {
    const firstPart = Math.floor(Math.random() * 9999 + 1);
    const secondPart = Math.floor(Math.random() * 9999 + 1);
    return `(${areaCode})${firstPart}-${secondPart}`
}

exports.generateNumberCellPhone = (areaCode) => {
    const operatorNumber = [67, 71, 72, 95, 96, 97, 98, 99, 68, 73, 74, 75, 76, 91, 92, 93, 94, 69, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];

    const randomOperatorNumber = Math.floor(Math.random() * operatorNumber.length);
    const firstPart = Math.floor(Math.random() * 100 + 10);
    const secondPart = Math.floor(Math.random() * 999 + 1000);
    console.log(firstPart)
    return `(${areaCode})9${operatorNumber[randomOperatorNumber]}${firstPart}-${secondPart}`
}