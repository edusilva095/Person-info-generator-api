const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const Nome = require("./src/model/model_nome");
const Sobrenome = require("./src/model/model_sobrenome");

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log("O projeto está ok!")
})