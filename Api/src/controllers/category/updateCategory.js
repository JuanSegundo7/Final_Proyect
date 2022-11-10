const { Category } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateCategory = async function (_id,data) {
    
let { name, type } = data;   //esto es req.params

//Data Validation
if (!ObjectId.isValid(_id)) throw new Error ("No valid _id type provided for category!") 

if (name){
  if ((typeof(name)!=="string") || (!name.length)){
    throw new Error("Error: Category name cannot be empty and must be of text type.")
  }else{
    name = name.toLowerCase();
  }
}

if (type){
  const typeOptions = ["Coffee", "Accessory", "Coffee Maker", "Others"];
  if (!typeOptions.includes(type)){
    throw new Error("Error: Wrong category type.")
  }
}


//Si no encuentro error alguno, actualizo el/los dato/s.
  try{
 
    const filter = { _id };
    const update = { name, type };
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
