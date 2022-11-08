require('dotenv').config();
const { DB_USER,  DB_PASSWORD} = process.env;
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.b5w0juw.mongodb.net/?retryWrites=true&w=majority`)
.then((result) => console.log("Conexion exitosa a la BBDD"))
.catch((err) => console.log(err));

module.exports = {
  Coffee: require("./models/Coffee.js"),
  Product: require("./models/product.js")
};