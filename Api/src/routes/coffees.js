const { Router } = require('express');
const router = Router();
const createCoffee = require("../controllers/coffee/createCoffee.js");
const getCoffees = require("../controllers/coffee/getCoffees.js");
const deleteCoffee = require("../controllers/coffee/deleteCoffee.js");
const getCoffeeByName = require("../controllers/coffee/getCoffeeByName.js");
const updateCoffee = require("../controllers/coffee/updateCoffee.js");

router.put("/:_id", async (req, res) => {

    const { _id } = req.params;
    //const { name, description, origin, type, stock, category} = req.body;

    try {
        let respuesta = await updateCoffee(_id, req.body);
        res.send(respuesta);
    } catch (unError) {
        res.status(400).send(unError.message);
    }

})

router.post("/", async function (req, res) {

    try {
        const respuesta = await createCoffee(req.body);
        res.send(respuesta);
    } catch (unError) {
        res.status(400).send(unError.message);
    }
});

router.get("/", async function (req, res) {
    const { name } = req.query;

    if (name) {
        try {
            const respuesta = await getCoffeeByName(name);
            res.send(respuesta);
        } catch (unError) {
            res.status(400).send(unError.message);
        }
    }
    else {
        try {
            const respuesta = await getCoffees();
            res.send(respuesta);
        } catch (unError) {
            res.status(400).send(unError.message);
        }
    }

});

router.delete("/:_id", async (req, res) => {

    try {
        //console.log("soy params:",req.params);
        const respuesta = await deleteCoffee(req.params._id);
        res.send(respuesta);
    } catch (unError) {
        res.status(400).send(unError.message)
    }
});

/* 

router.get("/", async function (req,res){
    const { name } = req.query;
    
    if (name){
        try{
            const respuesta = await getCountryByName(name);
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }  
    }
    else{
        try {
            const respuesta = await getAllCountries();
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }   
    }
    
});     */


/* router.get("/:idPais", async function (req,res){
    const {idPais} = req.params;
    try {
        const respuesta = await getCountryById(idPais);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
});
 */

module.exports = router;