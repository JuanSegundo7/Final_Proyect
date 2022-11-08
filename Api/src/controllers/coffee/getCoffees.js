const { Coffee } = require("../../db.js")

const getCoffees = async function () {

  try {
    const newCoffee =  await Coffee.find({})   
    return newCoffee;

  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = getCoffees;