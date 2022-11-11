const { Product, Category } = require("../../db.js")

const getProducts = async function (options) {

//en options tengo todo lo que me llega por req.query. Lo tengo que destructurar acá.
const {name, orderedbyname, orderedbystock, orderedbyprice} = options;
let { category } = options;
const sortOptions = [];

//le hago push a mi array de ordenamientos sólo si tengo algo, caso contrario queda vacío.
if (orderedbyname && orderedbyname.toUpperCase()==="DES") sortOptions.push(["name", -1])
if (orderedbyname && orderedbyname.toUpperCase()==="ASC") sortOptions.push(["name"])

if (orderedbystock && orderedbystock.toUpperCase()==="DES") sortOptions.push(["stock", -1])
if (orderedbystock && orderedbystock.toUpperCase()==="ASC") sortOptions.push(["stock"])

if (orderedbyprice && orderedbyprice.toUpperCase()==="DES") sortOptions.push(["price", -1])
if (orderedbyprice && orderedbyprice.toUpperCase()==="ASC") sortOptions.push(["price"])

//busco dentro de categories aquellas que coincidan en nombre con lo que le paso en category
try{
  var categoryComplete = await Category.findOne({name: category})
}catch(unError){
  throw new Error(unError)
}
if (categoryComplete){
  category =  categoryComplete._id
}else{
  category = null;
}

  try {
    const resp = await Product.find({ name: new RegExp(name, 'i') },{category})
    .sort(sortOptions)
    .populate("image").populate("category").populate("brand");
    return resp;
  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = getProducts;