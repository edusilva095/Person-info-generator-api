const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaSurname = Schema({
    surname:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("sobrenome", schemaSurname);