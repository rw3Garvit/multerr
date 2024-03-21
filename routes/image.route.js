const express = require("express");
const { imageController } = require("../controllers");
const { upload } = require("../middleware/multer");
const route = express.Router();

route.post("/add",upload.single("imageName"), imageController.addImage);
route.delete("/delete/:id", imageController.deleteImage);

route.get("/get", imageController.getImage);

module.exports = route;
