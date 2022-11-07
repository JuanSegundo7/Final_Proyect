const mongoose = require('mongoose');

const CoffeeSchema = mongoose.Schema(
  { /* _id: String, */
    name: {type: String, required: true},
    description: {type: String, required: true},
    origin: {type: String, required: true},
    type: {type: String, 
    enum : ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"]},
    stock: Number,
    category: {type: Number, required: true},
    /* activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity" //Esta es la forma de hacer las cosas con Mongoose y BBDD no relacionales.
      }
    ] */
  },
  {versionKey: false},
  { timestamps: true }
  );

const Coffee = mongoose.model("Coffee",CoffeeSchema) 

module.exports = Coffee;
