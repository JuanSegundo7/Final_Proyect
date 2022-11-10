const { Coffee } = require('../../db.js');
const getCoffeeById = async function (coffeeId) {
    
  try{
    const resp = await Coffee.findById(coffeeId)
    .populate("category").populate("image").populate("brand");
    //.populate("activities",["name","season"]);

    if (!resp) throw new Error("No coffee matches the informed id...")
  
    return resp;

  }catch(unError){
    throw new Error(unError)
  }    
    
  }
    
module.exports = getCoffeeById;
