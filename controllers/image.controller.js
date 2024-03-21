const { imageService } = require("../services");
const path = require("path");
const fs = require("fs");
const uploadImage = require('../middleware/cloudinary')

const addImage = async (req, res) => {
  console.log(req.body);
  console.log(req.body.firstName);

  const file = req.file;
 

  //upload cloudinary
  let result = await uploadImage(req.file.path)

  const body = {
    imageName: result.secure_url,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  const image = await imageService.addImage(body);

  res.status(200).json({
    message: "image uploaded success",
    res: image,
  });
};

const getImage = async (req, res) => {
  const image = await imageService.getImage();

  res.status(200).json({
    message: "get image succesds",
    data: image,
  });
};

const deleteImage = async (req, res) => {
  let id = req.params.id;

  let image = await imageService.deleteImage(id);

  if (image) {
    console.log(image);
    fs.unlinkSync(path.join(__dirname, `../public/images/${image.imageName}`));
    res.status(200).json({message:"deleted success"})
  }
};

module.exports = { addImage, getImage, deleteImage };
