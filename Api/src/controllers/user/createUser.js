const { User, Product } = require("../../db.js");
const ObjectId = require('mongoose').Types.ObjectId;


const createUser = async function (data) {

  const { _id, name, lastname, favorites, admin, password } = data;


//Data Validation
if ((typeof(_id)!=="string") || (!_id.length)){
  throw new Error("Error: User ID cannot be empty and must be of text type.")
}

if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: User Name cannot be empty and must be of text type.")
}

if ((typeof(lastname)!=="string") || (!lastname.length)){
  throw new Error("Error: User Lastname cannot be empty and must be of text type.")
}

if (typeof(admin)!=="boolean"){
  throw new Error("Error: Admin rights should be of boolean type (1 for admin, 0 for regular users).")
}

if ((typeof(password)!=="string") || (!password.length)){
  throw new Error("Error: User Password cannot be empty and must be of text type.")
}

//Favorites validation is kinda hard but still needed.
if (!Array.isArray(favorites)){
  throw new Error ("No valid data type provided for favorites. It should be an array!")
}
if (favorites.length){
  for (let i=0; i<favorites.length; i++){
    if ((typeof(favorites[i])!=="string") || (!ObjectId.isValid(favorites[i]))) throw new Error ("No valid _id type provided for favorites!")    
  }
  //assuming everything is an object, I will really search for the existing ids within my database
  for (let i=0; i<favorites.length; i++){
    try{
      let resp = await Product.findById(favorites[i])
      if (!resp) throw new Error(`Product id:${favorites[i]} not found in the Database!`)
    }catch(unError){
      throw new Error(unError.message)
    }
  }
}


//if no errors, the user is created
try {
    const newUser =  await User.create({
      _id,
      name: name.toLowerCase(),
      lastname: lastname.toLowerCase(), 
      favorites, 
      admin, 
      password
    });
    return newUser;
}catch (unError){
    throw new Error(unError)
}
  
}

module.exports = createUser;