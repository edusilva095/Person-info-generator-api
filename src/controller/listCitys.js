const axios = require("axios");

const codeCountrysArray = [11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53];

exports.listCitys = () => {
    const randomNumber = Math.floor(Math.random() * codeCountrysArray.length);
    return axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${codeCountrysArray[randomNumber]}/municipios`);
}