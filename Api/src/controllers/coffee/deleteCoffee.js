const { Coffee } = require("../../db.js")

const deleteCoffee = async function (_id) {

    try{  
      
        const toDeleteCoffee = await Coffee.findById(_id);
        if (toDeleteCoffee){
          await Coffee.deleteOne({_id}); //ojo, acá estoy usando object literals
          //return `Coffee deleted successfully (_id:${_id})`;
          return {deletedId: _id};
        }
        else return "Id to be deleted not found!"; 
  
      }
      catch(unError){
        throw new Error(unError.message)
      }
      
}

module.exports = deleteCoffee;