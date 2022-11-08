const { Router } = require('express');
const router = Router();
// const createCoffee = require("../controllers/coffee/createCoffee.js");
// const getCoffees = require("../controllers/coffee/getCoffees.js");
// const deleteCoffee = require("../controllers/coffee/deleteCoffee.js");
// const getCoffeeByName = require("../controllers/coffee/getCoffeeByName.js");
// const updateCoffee = require("../controllers/coffee/updateCoffee.js");
const getProducts = require("../controllers/product/getProducts.js");
const createProduct = require("../controllers/product/createProduct.js")
const deleteProduct = require("../controllers/product/deleteProduct.js")

router.get("/" , async (req,res) =>{
    try {
        const respuesta = await getProducts();
        res.send(respuesta);
    } catch (unError) {
        res.status(400).send(unError.message);
    }
} )

router.post("/" , async (req,res) =>{
    try {
        const respuesta = await createProduct(req.body);
        res.send(respuesta)
    } catch (unError) {
        res.status(400).send(unError.message);
    }
})


router.delete("/:_id", async (req, res) => {
    try {
        const respuesta = await deleteProduct(req.params._id);
        res.send(respuesta);
    } catch (unError) {
        res.status(400).send(unError.message)
    }
});


module.exports = router;