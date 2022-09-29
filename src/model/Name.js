const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("nome", schemaName);