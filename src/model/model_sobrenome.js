const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaSobrenome = Schema({
    sobrenome:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("sobrenome", schemaSobrenome);