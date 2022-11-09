const { Router } = require('express');
const createImage = require('../controllers/Image/createImage');
const getImages = require('../controllers/Image/getImages');
const router = Router();


router.get('/', async(req,res)=>{
    const response = await getImages();
    res.send(response);
})

router.post('/', async (req,res)=>{
    const {url} = req.body;
    const response = await createImage(url);
    res.send(response);
})

module.exports = router;