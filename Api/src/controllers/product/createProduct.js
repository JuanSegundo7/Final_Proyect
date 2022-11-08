const {Product} = require("../../db.js");

const createProduct = async function(data){
    const{name, description , stock , brand} = data;
    try {
        const newProduct = await Product.create({
            name, 
            description, 
            stock, 
            brand
        })
        return newProduct;
        
    } catch (unError) {
        throw new Error(unError);
    }
}

module.exports = createProduct;