const { User, Product } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateUser = async function (_id,data) {
    
let { name , lastname , password, favorites, picture, cart } = data;   //esto es req.params

//Data Validation
if ((typeof(_id)!=="string") || (!_id.length)){
  throw new Error("Error: User ID cannot be empty and must be of text type.")
} else{
  const previusId = await User.findById(_id);
  console.log(_id)
  console.log(previusId)
  if(!previusId) throw new Error("Error: User ID not found within the Database.") 
}

if (name){
  if ((typeof(name)!=="string") || (!name.length)){
    throw new Error("Error: User name cannot be empty and must be of text type.")
  }else{
    name = name.toLowerCase();
  }
}

if (lastname){
  if ((typeof(lastname)!=="string") || (!lastname.length)){
    throw new Error("Error: User lastname cannot be empty and must be of text type.")
  }else{
    lastname = lastname.toLowerCase();
  }
}

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
}

//Cart validation (same as for favorites)
if (cart){
  if (!Array.isArray(cart)){
    throw new Error ("No valid data type provided for cart. It should be an array!")
  }
  if (cart.length){
    for (let i=0; i<cart.length; i++){
      if ((typeof(cart[i])!=="string") || (!ObjectId.isValid(cart[i]))) throw new Error ("No valid _id type provided for cart product!")    
    }
    //assuming everything is an objectId, I will really search for the existing ids within my database
    for (let i=0; i<cart.length; i++){
      try{
        let resp = await Product.findById(cart[i])
        if (!resp) throw new Error(`Product id:${cart[i]} not found in the Database!`)
      }catch(unError){
        throw new Error(unError.message)
      }
    }
  }
}

//I'm not allowing admin rights to be changed within this route / controller as per security reasons.


//Si no encuentro error alguno, actualizo el/los dato/s.
  try{

    const filter = { _id };
    const update = { 
      name,
      lastname,
      password,
      favorites,
      picture,cart
     };
    let resp = await User.findOneAndUpdate(filter, update, {
        new: true
      });
    if (!resp) return "No User match has been found..."
    else return resp;
    
    }catch(unError){
        throw new Error(unError.message)
    }    
    
  }
    
module.exports = updateUser;
