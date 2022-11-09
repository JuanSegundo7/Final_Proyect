const {Product} = require("../../db.js");

const getProductById = async function(id){
    try {
        const response = Product.findById(id.toUpperCase());
        if(!response) throw new Error("No product matches the informed id...");
        return response;
    } catch (unError) {
        throw new Error(unError);
    }
}

module.exports = getProductById