const { Router } = require('express');
const router = Router();
const createUser = require("../controllers/user/createUser.js");
const getUsers = require("../controllers/user/getUsers.js");
//const deleteBrand = require("../controllers/brand/deleteBrand.js");
//const getBrandById = require("../controllers/brand/getBrandById.js");
//const updateBrand = require("../controllers/brand/updateBrand.js");


router.get("/", async function (req,res){
    
    //le voy a pasar a getCategories todo lo que llega por req.query.
    try{
        const respuesta = await getUsers(req.query);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }     

});

/* router.get("/:_idbrand", async function (req,res){
    const { _idbrand } = req.params;
    try {
        const respuesta = await getBrandById(_idbrand);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
}); */

/* router.put("/:_id", async (req, res) => {
    
    const { _id } = req.params;
    
    try{
        let respuesta = await updateBrand(_id,req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
}) */

router.post("/", async function (req, res){

    try{
        const respuesta = await createUser(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
});

/* router.delete("/:_id", async (req, res) => {

    try{
        //console.log("soy params:",req.params);
        const respuesta = await deleteBrand(req.params._id);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message)
    }
}); */

module.exports = router;