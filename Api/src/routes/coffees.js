const { Router } = require('express');
const router = Router();
const createCoffee = require("../controllers/coffee/createCoffee.js");
const getCoffees = require("../controllers/coffee/getCoffees.js");
const deleteCoffee = require("../controllers/coffee/deleteCoffee.js");
const updateCoffee = require("../controllers/coffee/updateCoffee.js");
const getCoffeeById = require("../controllers/coffee/getCoffeeById");

router.get("/", async function (req,res){
    
    //le voy a pasar a getCoffees todo lo que llega por req.query. Después destruturaré en la 
    //propia función, no acá.
    try{
        const respuesta = await getCoffees(req.query);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }      
});

router.get("/:_idcoffee", async function (req,res){
    const { _idcoffee } = req.params;
    try {
        const respuesta = await getCoffeeById(_idcoffee);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
});

router.put("/:_id", async (req, res) => {
    
    const { _id } = req.params;
    //const { name, description, origin, type, stock, category} = req.body;
    
    try{
        let respuesta = await updateCoffee(_id,req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
})

router.post("/", async function (req, res){

    try{
        const respuesta = await createCoffee(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
});

router.delete("/:_id", async (req, res) => {

    try{
        //console.log("soy params:",req.params);
        const respuesta = await deleteCoffee(req.params._id);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message)
    }
  });


module.exports = router;