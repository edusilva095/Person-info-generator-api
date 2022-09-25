const axios = require("axios");

exports.phone = async (selectCity) => {
    const ddd = await para()
    console.log(ddd[1].data)
    return dddPara();
}

const acre = async () => {
    const ddd68 = await axios.get("https://brasilapi.com.br/api/ddd/v1/68"); 
    return ddd68;
}

const alagoas = async () => {
    const ddd82 = await axios.get("https://brasilapi.com.br/api/ddd/v1/82");
    return ddd82;
}

const para = async () => {
    const ddd91 = await axios.get("https://brasilapi.com.br/api/ddd/v1/91");
    const ddd93 = await axios.get("https://brasilapi.com.br/api/ddd/v1/93");
    const ddd94 = await axios.get("https://brasilapi.com.br/api/ddd/v1/94");
    return [ddd91, ddd93, ddd94];
}