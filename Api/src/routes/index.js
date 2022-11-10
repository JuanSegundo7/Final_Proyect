const { Router } = require('express');
const coffeeRouter = require("../routes/coffees.js");
const productRouter = require("../routes/products.js");
const categoryRouter = require("../routes/categories.js");
const imageRouter = require("../routes/images.js");
const brandRouter = require("../routes/brands.js");

const router = Router();

// Configuro los routers
router.use('/coffees', coffeeRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/images', imageRouter);
router.use('/brands', brandRouter);


module.exports = router;
