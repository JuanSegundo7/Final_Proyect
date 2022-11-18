const { User, Product } = require("../../db.js");
const ObjectId = require('mongoose').Types.ObjectId;


const createUser = async function (data) {

  const { _id, name, lastname, favorites, /* admin, */ password, picture } = data;


//Data Validation
if ((typeof(_id)!=="string") || (!_id.length)){
  throw new Error("Error: User ID cannot be empty and must be of text type.")
} else{
  const previusId = await User.findById(_id);
  if(previusId)  throw new Error("Error: User ID cannot be equal to an existing one.") 
}

if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: User Name cannot be empty and must be of text type.")
}

if ((typeof(lastname)!=="string") || (!lastname.length)){
  throw new Error("Error: User Lastname cannot be empty and must be of text type.")
}

/* if (admin && (typeof(admin)!=="boolean")){
  throw new Error("Error: Admin rights should be of boolean type (true for admin, false for regular users).")
} */

if (password){
  if (typeof(password)!=="string") {
    throw new Error("Error: User Password must be of text type.")
  }
}

if (picture){
  if (typeof(picture)!=="string") {
    throw new Error("Error: Picture must be of text type (URL).")
  }
}

//Favorites validation is kinda hard but still needed.
if (favorites){
  if (!Array.isArray(favorites)){
    throw new Error ("No valid data type provided for favorites. It should be an array!")
  }
  if (favorites.length){
    for (let i=0; i<favorites.length; i++){
      if ((typeof(favorites[i])!=="string") || (!ObjectId.isValid(favorites[i]))) throw new Error ("No valid _id type provided for favorites!")    
    }
    //assuming everything is an objectId, I will really search for the existing ids within my database
    for (let i=0; i<favorites.length; i++){
      try{
        let resp = await Product.findById(favorites[i])
        if (!resp) throw new Error(`Product id:${favorites[i]} not found in the Database!`)
      }catch(unError){
        throw new Error(unError.message)
      }
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
      password,
      picture,
      /* admin, */ //can only be modified in the DB directly to prevent hacking attempts
    });
    return newUser;
}catch (unError){
    throw new Error(unError)
}
  
}

module.exports = createUser;