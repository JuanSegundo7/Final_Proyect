const { Coffee } = require('../../db');

const getCoffeeByName = async function (coffeeName) {
    
  try{
    const resp = await Coffee.find({ name: new RegExp(coffeeName, 'i') })
    //Es un tanto conceptual. Si no encuentro algo, en realidad NO es un error...
    if (!resp.length) return ("No coffee matches have been found...") 
    
    return resp;
    
    }catch(unError){
        throw new Error(unError.message)
    }    
    
  }
    
module.exports = getCoffeeByName;
