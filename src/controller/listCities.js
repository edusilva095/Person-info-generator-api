const axios = require("axios");

const listAreaCode = [61, 62, 64, 65, 66, 67, 82, 71, 73, 74, 75, 77, 85, 88, 98,
    99, 83, 81, 87, 86, 89, 84, 77, 68, 96, 92, 97, 91, 93, 94, 69, 95, 63, 27, 28,
    31, 32, 33, 34, 35, 37, 38, 21, 22, 24, 11, 12, 13, 14, 15, 16, 17, 18, 19, 41,
    42, 43, 44, 45, 46, 51, 53, 54, 55, 47, 48, 49]

exports.listCities = async () => {
    const randomNumber = Math.floor(Math.random() * listAreaCode.length);
    const stateAreaCode = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${listAreaCode[randomNumber]}`);
    return states(stateAreaCode, listAreaCode[randomNumber])
}

const states = (stateAreaCode, areaCode) => {
    const cities = stateAreaCode.data.cities;
    const randomNumber = Math.floor(Math.random() * cities.length);
    const city = stateAreaCode.data.cities[randomNumber];
    var nameStateAndCity = {}

    switch (stateAreaCode.data.state) {
        case "AC":
            return { state: "Acre", city: formatNameCity(city), ddd: areaCode };
        case "AL":
            return { state: "Alagoas", city: formatNameCity(city), ddd: areaCode };
        case "AP":
            return { state: "Amapá", city: formatNameCity(city), ddd: areaCode };
        case "AP":
            return { state: "Amapá", city: formatNameCity(city), ddd: areaCode };
        case "AM":
            return { state: "Amazonas", city: formatNameCity(city), ddd: areaCode };
        case "BA":
            return { state: "Bahia", city: formatNameCity(city), ddd: areaCode };
        case "CE":
            return { state: "Ceará", city: formatNameCity(city), ddd: areaCode };
        case "DF":
            return { state: "Distrito Federal", city: formatNameCity(city), ddd: areaCode };
        case "ES":
            return { state: "Espírito Santo", city: formatNameCity(city), ddd: areaCode };
        case "GO":
            return { state: "Goiás", city: formatNameCity(city), ddd: areaCode };
        case "MA":
            return { state: "Maranhão", city: formatNameCity(city), ddd: areaCode };
        case "MT":
            return { state: "Mato Grosso", city: formatNameCity(city), ddd: areaCode };
        case "MS":
            return { state: "Mato Grosso do Sul", city: formatNameCity(city), ddd: areaCode };
        case "MG":
            return { state: "Minas Gerais", city: formatNameCity(city), ddd: areaCode };
        case "PA":
            return { state: "Minas Gerais", city: formatNameCity(city), ddd: areaCode };
        case "PA":
            return { state: "Pará", city: formatNameCity(city), ddd: areaCode };
        case "PB":
            return { state: "Paraíba", city: formatNameCity(city), ddd: areaCode };
        case "PR":
            return { state: "Paraná", city: formatNameCity(city), ddd: areaCode };
        case "PE":
            return { state: "Pernambuco", city: formatNameCity(city), ddd: areaCode };
        case "PI":
            return { state: "Piauí", city: formatNameCity(city), ddd: areaCode };
        case "RJ":
            return { state: "Rio de Janeiro", city: formatNameCity(city), ddd: areaCode };
        case "RN":
            return { state: "Rio Grande do Norte", city: formatNameCity(city), ddd: areaCode };
        case "RS":
            return { state: "Rio Grande do Sul", city: formatNameCity(city), ddd: areaCode };
        case "RO":
            return { state: "Rondônia", city: formatNameCity(city), ddd: areaCode };
        case "RR":
            return { state: "Roraima", city: formatNameCity(city), ddd: areaCode };
        case "SC":
            return { state: "Santa Catarina", city: formatNameCity(city), ddd: areaCode };
        case "SP":
            return { state: "São Paulo", city: formatNameCity(city), ddd: areaCode };
        case "SE":
            return { state: "Sergipe", city: formatNameCity(city), ddd: areaCode };
        default:
            return { state: "Tocantins", city: formatNameCity(city), ddd: areaCode };
    }
}

const formatNameCity = (nameCity) => {
    var name = nameCity.toLowerCase().split(" ");
    for (let i = 0; i < name.length; i++) {
        if (name[i] == "DA" || name[i] == "DE" || name[i] == "DO" || name[i] == "DOS") {
            name[i] = name[i][0].toLowerCase() + name[i].substr(1);
        } else {
            name[i] = name[i][0].toUpperCase() + name[i].substr(1);
        }
    }
    return name.join(" ");
}