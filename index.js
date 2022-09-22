const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const Nome = require("./src/model/model_nome");
const Sobrenome = require("./src/model/model_sobrenome");
const Routes = require("./src/routes/routes");

mongoose.connect('mongodb://localhost/gerador-de-pessoas');

app.use(Routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("server is running!!");
})