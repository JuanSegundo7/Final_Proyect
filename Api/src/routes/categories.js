const { Router } = require('express');
const router = Router();
const createCategory = require("../controllers/category/createCategory.js")
const getCategories = require("../controllers/category/getCategories.js")

router.get("/", async function (req,res){
    
    //le voy a pasar a getCategories todo lo que llega por req.query.
    try{
        const respuesta = await getCategories(req.query);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }     
    
});

router.post("/", async function (req, res){

    try{
        const respuesta = await createCategory(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
});


module.exports = router;