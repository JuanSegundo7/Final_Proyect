const { Category } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateCategory = async function (_id,data) {
    
const { name } = data;   //esto es req.params

//Data Validation
if (!ObjectId.isValid(_id)) throw new Error ("No valid _id type provided for category!") 

if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: Category Name cannot be empty and must be of text type.")
}

//Si no encuentro error alguno, actualizo el/los dato/s.
  try{
 
    const filter = { _id };
    const update = { name: name.toLowerCase() };
    let resp = await Category.findOneAndUpdate(filter, update, {
        new: true
      });
    if (!resp) return "No category match has been found..."
    else return resp;
    
    }catch(unError){
        throw new Error(unError.message)
    }    
    
  }
    
module.exports = updateCategory;
