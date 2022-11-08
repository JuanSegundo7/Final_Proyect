const {Product} = require("../../db.js");

const getProductByName = async function(name){
    try {
        const product = await Product.find({name: new RegExp(name, 'i')});
        if (!product.length) return('Not matches with products...');
        return product;
        
    } catch (unError) {
       throw new Error (unError);
    }

}

module.exports = getProductByName;