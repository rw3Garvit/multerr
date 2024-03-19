const express = require("express");

const routes = express.Router();

const imageRoute = require("./image.route");

routes.use("/image", imageRoute);



module.exports = routes;
