const mongoose = require('mongoose');

const CoffeeSchema = mongoose.Schema(
  { name: {type: String, required: true},
    description: {type: String, required: true},
    origin: {type: String, required: true},
    price: {type: Number, required: true},
    type: {type: String, required: true, 
      enum : ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"]},
    stock: {type: Number, required: true},
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category" //Esta es la forma de hacer las cosas con Mongoose y BBDD no relacionales.
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand"
    }
  },
  {versionKey: false}
  );

const Coffee = mongoose.model("Coffee",CoffeeSchema) 

module.exports = Coffee;
