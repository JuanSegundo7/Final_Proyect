const {Product,Category, Image, Brand } = require("../../db.js");
const ObjectId = require('mongoose').Types.ObjectId;

const createProduct = async function(data){
    const{name, description , stock , brand, image, price , category} = data;

    // data validation
    if ((typeof(name)!=="string") || (!name.length)){
        throw new Error("Error: Product Name cannot be empty and must be of text type.")
    }

    if ((typeof(description) !=="string") || (!description.length)){
        throw new Error("Error: Product description cannot be empty and must be of text type.")
    }

    if ((typeof(price)!=="number") || (!(price>0))){
        throw new Error("Error: Price must be a number and higher than 0.")
    }

    if (typeof(stock)!=="number") throw new Error("Error: Stock must be an integer number higher than 0.")
    //si efectivamente ES un numero
    if (!((stock>=0) && (Number.isInteger(stock))))throw new Error("Error: Stock must be an integer number higher than 0.")

    if(image){
        if ((typeof(image)!=="string") || (!ObjectId.isValid(image))) throw new Error ("No valid _id type provided for image!")
        else{
            try{
            let resp = await Image.findById(image)
            if (!resp) throw new Error(`Image id:${image} not found in the Database!`)
            } catch(unError){
                throw new Error(unError.message)
            }
        }
    }

    if ((typeof(category)!=="string") || (!ObjectId.isValid(category))) throw new Error ("No valid _id type provided for category!")
    else{
        try{
        let resp = await Category.findById(category)
        if (!resp) throw new Error(`Category id:${category} not found in the Database!`)
        }
        catch(unError){
        throw new Error(unError.message)
        }
    }

    if(brand){
        if ((typeof(brand)!=="string") || (!ObjectId.isValid(brand))) throw new Error ("No valid _id type provided for brand!")
        else{
            try{
            let resp = await Brand.findById(brand)
            if (!resp) throw new Error(`Brand id:${brand} not found in the Database!`)
            }
            catch(unError){
            throw new Error(unError.message)
            }
        }
    }



    try {
        const newProduct = await Product.create({
            name, 
            description, 
            stock,
            category, 
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