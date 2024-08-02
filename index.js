const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

const Name = require("./src/model/Name");
const Surname = require("./src/model/Surname");
const Routes = require("./src/routes/routes");

mongoose.connect("mongodb://0.0.0.0:27017/person-info-generator");

app.use(Routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("server is running!!");
})
