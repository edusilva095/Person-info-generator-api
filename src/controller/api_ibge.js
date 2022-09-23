const axios = require("axios");

exports.listarEstados = () => {
    return axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
}

exports.listarCidades = (value) => {
    return axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + value + "/municipios");
}