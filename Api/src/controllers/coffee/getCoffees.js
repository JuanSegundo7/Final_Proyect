const { Coffee } = require("../../db.js")

const getCoffees = async function (options) {

//en options tengo todo lo que me llega por req.query. Lo tengo que destructurar acá.
const {name, orderedbyname, orderedbystock} = options;
const sortOptions = [];

//le hago push a mi array de ordenamientos sólo si tengo algo, caso contrario queda vacío.
if (orderedbyname && orderedbyname.toUpperCase()==="DES") sortOptions.push(["name", -1])
if (orderedbyname && orderedbyname.toUpperCase()==="ASC") sortOptions.push(["name"])

if (orderedbystock && orderedbystock.toUpperCase()==="DES") sortOptions.push(["stock", -1])
if (orderedbystock && orderedbystock.toUpperCase()==="ASC") sortOptions.push(["stock"])

console.log("mi ordenamiento:",sortOptions)

  try {
    const resp = await Coffee.find({ name: new RegExp(name, 'i') }).sort(sortOptions);
    return resp;
  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = getCoffees;