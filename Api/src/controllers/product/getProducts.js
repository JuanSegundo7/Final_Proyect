const {Product} = require("../../db.js")

const getProducts = async function() {
    try {
        const allProducts = await Product.find({});
        return allProducts;
    } catch (unError) {
        throw new Error(unError);
    }

}

module.exports = getProducts;