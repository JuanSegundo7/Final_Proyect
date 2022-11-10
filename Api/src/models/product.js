const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{type: String, required:true},
        description:{type: String , required:true},
        stock:{type: Number , required:true},
        price: {type: Number, required: true},
        type: Number, //para en un futuro depende de la primary key de la coleccion tipos(si son remeras, tazas, cafeteras, capsulas , etc)
        brand:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand"

        }, // quizas en un futuro que sea por primary key de otra coleccion marca
        image:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    },
    {versionKey: false}
)

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;