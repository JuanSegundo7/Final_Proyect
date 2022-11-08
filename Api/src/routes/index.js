const { Router } = require('express');
const coffeeRouter = require("../routes/coffees.js");
const productRouter = require("../routes/product.js")
//const activitiesRouter = require("../routes/activities.js");

const router = Router();

// Configuro los routers
router.use('/coffees', coffeeRouter);
//router.use('/activities', activitiesRouter);
router.use("/products" , productRouter);

module.exports = router;
