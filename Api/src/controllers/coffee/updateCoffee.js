const { Coffee } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateCoffee = async function (_id,data) {
    
const { name, description, origin, type, stock, category} = data;   //esto es req.params

  try{
    
    //consulto si es válido el tipo de dato provisto como ID.
    if (!ObjectId.isValid(_id)) return ("No valid _id provided...") 
    
    const filter = { _id: _id };
    const update = { name, description, origin, type, stock, category };//no está validando los enums
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
