const { Product, Category, Image } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateProduct = async function (_id, data) {
    const {name, description, stock, price, brand, image } = data;
    try {
        const filter = { _id };
        const update = {
            name,
            description,
            stock,
            price,
            brand,
            image
        };
let resp = await Product.findOneAndUpdate(filter, update, {new: true});
if (!resp) return "No product match has been found..."
else return resp;

    } catch (unError) {
        throw new Error(unError);
    }
}


module.exports = updateProduct;


// let resp = await Coffee.findOneAndUpdate(filter, update, {new: true});
// if (!resp) return "No coffee match has been found..."
// else return resp;

// }catch(unError){
//     throw new Error(unError.message)
// }    

// }
