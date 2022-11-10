const { Coffee, Category, Image, Brand } = require("../../db.js");
const ObjectId = require('mongoose').Types.ObjectId;


const createCoffee = async function (data) {

  const { name, description, origin, price, type, stock, category, image, brand } = data;

//Data Validation
if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: Coffee Name cannot be empty and must be of text type.")
}

if ((typeof(description)!=="string") || (!description.length)){
  throw new Error("Error: Coffee description cannot be empty and must be of text type.")
}

if ((typeof(origin)!=="string") || (!origin.length)){
  throw new Error("Error: Coffee origin cannot be empty and must be of text type.")
}

if ((typeof(price)!=="number") || (!(price>0))){
  throw new Error("Error: Price must be a number and higher than 0.")
}
  
const typeOptions = ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"];
if (!typeOptions.includes(type)){
  throw new Error("Error: Wrong coffee type.")
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

if (!ObjectId.isValid(brand)) throw new Error ("No valid _id type provided for brand!")
else{
    try{
      let resp = await Brand.findById(brand)
      if (!resp) throw new Error(`Brand id:${brand} not found in the Database!`)
    }
    catch(unError){
      throw new Error(unError.message)
    }
}


//Si no tuve ningún error, creo el café.
  try {
    const newCoffee =  await Coffee.create({
      //lo hago porque mongoose de momento no realiza ordenamientos case insensitive, 
      //entonces voy a guarda en mi DB, todo en minusculas
      name: name.toLowerCase(),
      description,
      origin,
      price,
      type,
      stock,
      category,
      image,
      brand
    });
    return newCoffee;

  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = createCoffee;