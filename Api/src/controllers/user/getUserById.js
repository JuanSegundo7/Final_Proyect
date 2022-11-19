const { User } = require('../../db.js');

const getUserById = async function (UserId) {
  try{
    const resp = await User.findById(UserId)
    .populate("favorites").populate("cart");

    //if (!resp) throw new Error("No User matches the informed id...")
    if (!resp) {
      console.log("No User matches the informed id...");
      return {error: "no user Id found in the DataBase."}
    }
  
    return resp;

  }catch(unError){
    throw new Error(unError)
  }    
}
    
module.exports = getUserById;
