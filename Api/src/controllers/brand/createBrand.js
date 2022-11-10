const { Brand, Image } = require("../../db.js");
const ObjectId = require('mongoose').Types.ObjectId;

const createBrand = async function (data) {

  const { name, image } = data;

//Data Validation
if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: Brand Name cannot be empty and must be of text type.")
}

//este linea inicial la pongo porque image no es un campo obligatorio de Brand
if (image){
  if ((typeof(image)!=="string") || (!ObjectId.isValid(image))) throw new Error ("No valid _id type provided for image!")
  else{
      try{
        let resp = await Image.findById(image)
        if (!resp) throw new Error(`Image id:${image} not found in the Database!`)
      }
      catch(unError){
        throw new Error(unError.message)
      }
  }
}


//si no hay error, creo la marca.
  try {
    const newBrand =  await Brand.create({name: name.toLowerCase(), image});
    return newBrand;

  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = createBrand;