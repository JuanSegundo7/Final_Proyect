const { User } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateUser = async function (_id,data) {
    
let { name , lastname , password } = data;   //esto es req.params

//let{admin , favorites} = data;

//Data Validation
if (!ObjectId.isValid(_id)) throw new Error ("No valid _id type provided for User!") 

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

//QUE HACEMOS CON EL TEMA DE CAMBIAR EL ADMIN

if (password){
  if ((typeof(password)!=="string") || (!password.length)){
    throw new Error("Error: User password cannot be empty and must be of text type.")
  }
}
//Si no encuentro error alguno, actualizo el/los dato/s.
  try{

    const filter = { _id };
    const update = { 
      name,
      lastname,
      password
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
