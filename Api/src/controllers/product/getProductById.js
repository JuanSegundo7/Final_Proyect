const {Product} = require("../../db.js");

const getProductById = async function(_id){
    try {
        const response = Product.find({_id});
        if(!response) throw new Error("No product matches the informed id...");
        return response;
    } catch (unError) {
        throw new Error(unError);
    }
}

module.exports = getProductById