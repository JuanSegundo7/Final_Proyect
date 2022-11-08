const { Coffee } = require("../../db.js")

const createCoffee = async function (data) {

  const { name, description, origin, type, stock, category} = data;

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