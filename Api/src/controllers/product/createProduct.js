const {Product} = require("../../db.js");

const createProduct = async function(data){
    const{name, description , stock , brand, image, price} = data;
    try {
        const newProduct = await Product.create({
            name, 
            description, 
            stock, 
            brand,
            image, 
            price
        })
        return newProduct;
        
    } catch (unError) {
        throw new Error(unError);
    }
}

module.exports = createProduct;