const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  }
  
});

const image = mongoose.model("imageSchema", imageSchema);

module.exports = image;
