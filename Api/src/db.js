require("dotenv").config();
const { DB_USER, DB_PASSWORD } = process.env;
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.b5w0juw.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((result) => console.log("Conexion exitosa a la BBDD"))
  .catch((err) => console.log(err));

module.exports = {
  Product: require("./models/Product.js"),
  Category: require("./models/Category.js"),
  Image: require("./models/Image.js"),
  Brand: require("./models/Brand.js"),
  User: require("./models/User.js"),
  Comment: require("./models/Comment.js"),
};

//1
