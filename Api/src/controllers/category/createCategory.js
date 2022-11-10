const { Category } = require("../../db.js")

const createCategory = async function (data) {

  const { name, type } = data;

//Data Validation
if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: Category Name cannot be empty and must be of text type.")
}

const typeOptions = ["Coffee", "Accessory", "Coffee Maker", "Others"];
if (!typeOptions.includes(type)){
  throw new Error("Error: Wrong category type.")
}

  try {
    const newCategory =  await Category.create({name: name.toLowerCase(), type});
    return newCategory;

  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = createCategory;