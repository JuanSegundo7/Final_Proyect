const {Product} = require("../../db.js")

const getProducts = async function(data) {
    const {name, orderedbyname, orderedbystock} = data;
    const sortOptions = [];

    if (orderedbyname && orderedbyname.toUpperCase()==="DES") sortOptions.push(["name", -1])
    if (orderedbyname && orderedbyname.toUpperCase()==="ASC") sortOptions.push(["name", 1])

    if (orderedbystock && orderedbystock.toUpperCase()==="DES") sortOptions.push(["stock", -1])
    if (orderedbystock && orderedbystock.toUpperCase()==="ASC") sortOptions.push(["stock", 1])

    try {
        const allProducts = await Product.find({ name: new RegExp(name, 'i') }).sort(sortOptions)
        .populate("image").populate("brand").populate("category");
        return allProducts;
    } catch (unError) {
        throw new Error(unError);
    }

}

module.exports = getProducts;