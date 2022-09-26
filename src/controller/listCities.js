const axios = require("axios");

const listDDD = [61,62, 64, 65, 66, 67, 82, 71, 73, 74, 75, 77, 85, 88, 98, 99, 
    83, 81, 87, 86, 89, 84, 77, 68, 96, 92, 97, 91, 93, 94, 69, 95, 63, 27, 28, 
    31, 32, 33, 34, 35, 37, 38, 21, 22, 24, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    41, 42, 43, 44, 45, 46, 51, 53, 54, 55, 47, 48, 49]

exports.listCities = () => {
    const randomNumber = Math.floor(Math.random() * listDDD.length);
    return axios.get(`https://brasilapi.com.br/api/ddd/v1/${randomNumber}`);
}