const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dfoj2nppa",
  api_key: "773468728641467",
  api_secret: "Y_TPjdKMoaUWD2fosuVrCaxG56U",
});

module.exports = cloudinary;
