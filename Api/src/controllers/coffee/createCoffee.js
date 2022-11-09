const { Coffee, Category } = require("../../db.js");


const createCoffee = async function (data) {

  const { name, description, origin, type, stock, category } = data;

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

const typeOptions = ["En Grano", "Molienda Gruesa", "Molienda Media", "Molienda Fina"];
if (!typeOptions.includes(type)){
  throw new Error("Error: Coffee type not valid.")
}

if (typeof(stock)!=="number")
  throw new Error("Error: Stock must be 0 or an integer number.")
else  //si efectivamente ES un numero
  if (!((stock>=0) && (Number.isInteger(stock))))
  throw new Error("Error: Stock must be 0 or an integer number.")

try{
  let resp = await Category.findById(category)
  if (!resp) throw new Error(`Category id:${category} not found in the Database!`)
}
catch(unError){
  throw new Error(unError.message)
}

//Si no tuve ningún error, creo el café.
  try {
    const newCoffee =  await Coffee.create({
      name,
      description,
      origin,
      type,
      stock,
      category
    });
    return newCoffee;

  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = createCoffee;