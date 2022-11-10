const { Router } = require('express');
const createImage = require('../controllers/Image/createImage');
const getImages = require('../controllers/Image/getImages');
const router = Router();


router.get('/', async(req,res)=>{
    const response = await getImages();
    res.send(response);
})

router.post('/', async (req,res)=>{
    const response = await createImage(req.body);
    res.send(response);
})

module.exports = router;