const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{type: String, required:true},
        description:{type: String , required:true},
        stock:{type: Number , required:true},
        type: Number, //para en un futuro depende de la primary key de la coleccion tipos(si son remeras, tazas, cafeteras, capsulas , etc)
        marca:{type: String, required:true}, // quizas en un futuro que sea por primary key de otra coleccion marca
    },
    {versionKey: false}
)

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;