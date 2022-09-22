const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaNome = Schema({
    nome: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("nome", schemaNome);