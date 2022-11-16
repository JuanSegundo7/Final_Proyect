const { User } = require('../../db.js');

const getUserById = async function (UserId) {
  try{
    const resp = await User.findById(UserId)
    .populate("favorites")

    if (!resp) throw new Error("No User matches the informed id...")
  
    return resp;

  }catch(unError){
    throw new Error(unError)
  }    
}
    
module.exports = getUserById;
