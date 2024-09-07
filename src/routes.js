const express = require("express");
const routes = express.Router();
const DB = require("./characters");

routes.get("/characters", (req, res) => {
    res.status(200).json(DB.characters);
});

module.exports = routes;