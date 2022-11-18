const { Router } = require('express');
const sendEmail = require("../controllers/mail/sendMail.js");
const router = Router();

router.post('/' , async function (req,res){

    // const {email,name} = req.query;
    // console.log(req.body);
    try {
        // if(!email) throw new Error('No hay mail');
        const resp = await sendEmail(/*email,name*/);
        res.status(200).send("mail enviado")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;