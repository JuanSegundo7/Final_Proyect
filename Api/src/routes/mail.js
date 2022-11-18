const { Router } = require('express');
const sendEmail = require("../controllers/mail/sendMail.js");
const router = Router();

router.post('/' , async function (req,res){

    console.log(req.body,"esto es body");
    const {email} = req.body
    try {
        if(!email) throw new Error('No hay mail');
        const resp = await sendEmail(email, req.body);
        res.status(200).send("mail enviado")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;