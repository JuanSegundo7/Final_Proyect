const { Router } = require('express');
const router = Router();
const getProducts = require("../controllers/product/getProducts.js");
const createProduct = require("../controllers/product/createProduct.js");
const deleteProduct = require("../controllers/product/deleteProduct.js");
const getProductById = require("../controllers/product/getProductById.js");

router.get("/" , async (req,res) =>{
        try {
            const respuesta = await getProducts(req.query);
            res.send(respuesta);
        } catch (unError) {
            res.status(400).send(unError.message);
        }
} )

router.get("/:_id", async (req,res) =>{
    try {
        const{_id} = req.params;
        const respuesta = await getProductById(_id);
        res.send(respuesta)
    } catch (unError) {
        res.status(400).send(unError.message)
    }
})

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