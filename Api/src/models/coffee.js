const mongoose = require('mongoose');

const CoffeeSchema = mongoose.Schema(
  { name: {type: String, required: true},
    description: {type: String, required: true},
    origin: {type: String, required: true},
    type: {type: String, 
      enum : ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"]},
    stock: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category" //Esta es la forma de hacer las cosas con Mongoose y BBDD no relacionales.
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
    }
  },
  {versionKey: false}
  );

const Coffee = mongoose.model("Coffee",CoffeeSchema) 

module.exports = Coffee;
