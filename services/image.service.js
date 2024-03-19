const { imageSchema } = require("../models");

const addImage = (body) => {
  const image = new imageSchema({
    imageName: body.imageName,
    firstName: body.firstName,
    lastName: body.lastName,
  });

  return image.save(body);
};

const getImage = () => {
  return imageSchema.find();
};

const deleteImage = (id) => {
  return imageSchema.findByIdAndDelete(id);
};

module.exports = { addImage, getImage, deleteImage };
