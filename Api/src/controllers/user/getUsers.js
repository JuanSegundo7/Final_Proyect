const { User } = require("../../db.js");
const getProductById = require("../../controllers/product/getProductById.js");

var response = null;
var resp = null;

const getUsers = async function (options) {

//en options tengo todo lo que me llega por req.query. Lo tengo que destructurar acá.
const {name, orderedbyname} = options;
const sortOptions = [];

//le hago push a mi array de ordenamientos sólo si tengo algo, caso contrario queda vacío.
if (orderedbyname && orderedbyname.toUpperCase()==="DES") sortOptions.push(["name", -1])
if (orderedbyname && orderedbyname.toUpperCase()==="ASC") sortOptions.push(["name"])
const findOptions = {}
if(name){
  findOptions.name = new RegExp(name, 'i');
}

  try {
    const resp = await User.find(findOptions).lean().sort(sortOptions)
    .populate("favorites")//.populate("cart");

    //console.log("soy resp:",resp)

    if (resp && Array.isArray(resp) && resp.length){
      //console.log("hoolaaaa, entre bien")
      for (let i=0; i<resp.length; i++){
        try {
          if (resp[i].cart && resp[i].cart.length){
            //console.log("estoy aca buachooo",resp[i].cart.length)
            for (let j=0; j<resp[i].cart.length;j++){
              response = await getProductById(resp[i].cart[j]._id);
              resp[i].cart[j]["name"] = response.name;
              resp[i].cart[j]["stock"] = response.stock;
              resp[i].cart[j]["image"] = response.image.url;
              resp[i].cart[j]["price"] = response.price;
              //console.log("xxx:",resp[i].cart[j]._id)
            if (!response) console.log(`no product found matching the provided id ${resp[i].cart[j]._id}`)
          }
          
          }
          
        } catch (error) {
          console.log(error)
        }
      }
    }

    return resp;
  }catch (unError){
    throw new Error(unError)
  }
  
}

module.exports = getUsers;