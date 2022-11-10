const { Brand } = require('../../db.js');
const getBrandById = async function (brandId) {
    
  try{
    const resp = await Brand.findById(brandId)
    .populate("image");
    //.populate("activities",["name","season"]);

    if (!resp) throw new Error("No brand matches the informed id...")
  
    return resp;

  }catch(unError){
    throw new Error(unError)
  }    
    
  }
    
module.exports = getBrandById;
