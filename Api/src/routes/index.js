const { Router } = require('express');
const coffeeRouter = require("../routes/coffees.js");
const productRouter = require("../routes/products.js");

const router = Router();

// Configuro los routers
router.use('/coffees', coffeeRouter);
router.use('/products', productRouter);


module.exports = router;
