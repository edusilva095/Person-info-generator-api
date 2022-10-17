const generateDocument = require("./generateDocument");

exports.generateRandomRg = (req, res) => {
    try {
        const rg = { rg: generateDocument.generateRg() }
        res.json(rg);
    } catch (error) {
        res.send(error);
    }
}

exports.generateRandomCpf = (req, res) => {
    try {
        const cpf = { cpf: generateDocument.generateCpf() }
        res.json(cpf);
    } catch (error) {
        res.send(error);
    }
}