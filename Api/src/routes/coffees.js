const { Router } = require('express');
const router = Router();
const createCoffee = require("../controllers/createCoffee.js");
const getCoffees = require("../controllers/getCoffees.js");

router.post("/", async function (req, res){

    try{
        const respuesta = await createCoffee(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
});

router.get("/", async function (req,res){
    try{
        const respuesta = await getCoffees();
        res.send(respuesta)
    }catch(unError){
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