const mongoose = require("mongoose");
const Nome = mongoose.model("nome");
const Sobrenome = mongoose.model("sobrenome");

exports.getAllNome = (req, res) => {
    Nome.find({}, (err, nomes) => {
        if (err) {
            res.send(err);
        }
        res.json(nomes);
    })
}

exports.registerNome = (req, res) => {
    let nome = new Nome(req.body);

    nome.save((err, data) => {
        if(err){
            res.send(err)
        }
        res.json(data)
    })
}

exports.getAllSobrenome = (req, res) => {
    Sobrenome.findOne({}, (err, sobrenomes) => {
        if (err) {
            res.send(err);
        };
        res.json(sobrenomes);
    });
}

exports.registerSobrenome = (req, res) => {
    let sobrenome = new Sobrenome(req.body);

    sobrenome.save((err, data) => {
        if(err){
            res.send(err)
        }
        res.json(data)
    })
}