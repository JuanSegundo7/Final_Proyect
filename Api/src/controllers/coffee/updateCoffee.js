const { Coffee, Category, Image } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateCoffee = async function (_id,data) {
    
const { name, description, origin, type, stock, category, image} = data;   //esto es req.params

//Data Validation

//consulto si es válido el tipo de dato provisto como ID.
if (!ObjectId.isValid(_id)) throw new Error ("No valid _id type provided for coffee!") 

if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: Coffee Name cannot be empty and must be of text type.")
}

if ((typeof(description)!=="string") || (!description.length)){
  throw new Error("Error: Coffee description cannot be empty and must be of text type.")
}

if ((typeof(origin)!=="string") || (!origin.length)){
  throw new Error("Error: Coffee origin cannot be empty and must be of text type.")
}

const typeOptions = ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"];
if (!typeOptions.includes(type)){
  throw new Error("Error: Coffee type not valid.")
}

if (typeof(stock)!=="number")
  throw new Error("Error: Stock must be 0 or an integer number.")
else  //si efectivamente ES un numero
  if (!((stock>=0) && (Number.isInteger(stock))))
  throw new Error("Error: Stock must be 0 or an integer number.")


if (!ObjectId.isValid(category)) throw new Error ("No valid _id type provided for category!")
else{
    try{
      let resp = await Category.findById(category)
      if (!resp) throw new Error(`Category id:${category} not found in the Database!`)
    }
    catch(unError){
      throw new Error(unError.message)
    }
}

if (!ObjectId.isValid(image)) throw new Error ("No valid _id type provided for image!")
else{
    try{
      let resp = await Image.findById(image)
      if (!resp) throw new Error(`Image id:${image} not found in the Database!`)
    }
    catch(unError){
      throw new Error(unError.message)
    }
}

//si no encuentro error alguno, actualizo el/los dato/s.
  try{
 
    const filter = { _id };
    const update = { name: name.toLowerCase(), description, origin, type, stock, category };//no está validando los enums
    let resp = await Coffee.findOneAndUpdate(filter, update, {
        new: true
      });
    if (!resp) return "No coffee match has been found..."
    else return resp;
    
    }catch(unError){
        throw new Error(unError.message)
    }    
    
  }
    
module.exports = updateCoffee;
