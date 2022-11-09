const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
  { name: {type: String, required: true},
  //veremos luego si es necesario hacer la referencia bidireccional. De momento, lo dejo así.  
  /* activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity" //Esta es la forma de hacer las cosas con Mongoose y BBDD no relacionales.
      }
    ] */
  },
  {versionKey: false}
  );

const Category = mongoose.model("Category",CategorySchema) 

module.exports = Category;
