const { Product, Brand, Category, Image } = require('../../db');
const ObjectId = require('mongoose').Types.ObjectId;

const updateProduct = async function (_id, data) {
    const {description, stock, price, brand, image, category } = data;
    let{name} = data;

    if(name){    
        if ((typeof(name)!=="string") || (!name.length)){
            throw new Error("Error: Product Name cannot be empty and must be of text type.")
        }else{
            name = name.toLowerCase();
        }
    }

    if(description){
        if ((typeof(description) !=="string") || (!description.length)){
            throw new Error("Error: Product description cannot be empty and must be of text type.")
        }
    }

    if (stock) {
        if (typeof(stock)!=="number") throw new Error("Error: Stock must be an integer number higher than 0.")
        if (!((stock>=0) && (Number.isInteger(stock))))throw new Error("Error: Stock must be an integer number higher than 0.")
    }

    if (price) {
        if ((typeof(price)!=="number") || (!(price>0))){
            throw new Error("Error: Price must be a number and higher than 0.")
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

    if(category){    
        if ((typeof(category)!=="string") || (!ObjectId.isValid(category))) throw new Error ("No valid _id type provided for category!")
        else{
            try{
            let resp = await Category.findById(category)
            if (!resp) throw new Error(`Category id:${category} not found in the Database!`)
            }
            catch(unError){
            throw new Error(unError.message)
            }
        }}

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

    try {
        const filter = { _id };
        const update = {
            name,
            description,
            stock,
            price,
            brand,
            image,
            category
        };
let resp = await Product.findOneAndUpdate(filter, update, {new: true});
if (!resp) return "No product match has been found..."
else return resp;

    } catch (unError) {
        throw new Error(unError);
    }
}


module.exports = updateProduct;
