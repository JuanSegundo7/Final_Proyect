const { Router } = require('express');
const router = Router();
const mercadopago = require("mercadopago");

const TEST_ACCESS_TOKEN ="APP_USR-7942690128692880-112022-61f6e6c8b9a4c804c20385dda87fa84f-1243916405"
mercadopago.configure({
    access_token: TEST_ACCESS_TOKEN
});

router.post("/", async (req, res) => {

    // const {cart} = req.body;
    const { email, name , cart} = req.body;
    // console.log("quantity",cart);
    // console.log("LLEGUE FORRO A LA RUTA");
    console.log(cart, "soy cart en mercado pago");
    
    let preference = {
        //transaction_amount: cart[0].price * cart[0].quantity,
        payer:{
            name,
            email
        },
        items:  // por cada producto un item 
            [{
                title:cart[0].name,
                unit_price:cart[0].price,
                quantity: cart[0].quantity,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit mauris quam, nec mollis libero pulvinar sit amet. Nulla facilisi."
            }],
        back_urls: {
            success: "http://localhost:3001/mail" // "http://localhost:3000/"
            //failure, por alguna rzon falla.
            //pending, por ejemplo pago en efectivo.
        },
        // notification_url:""//aca tenemos que poner que se envie el mail
    };
    
    await mercadopago.preferences.create(preference)
        .then(function (response) {
            res.send(response.body.init_point);
        })
        .catch(function (error) {
            console.log(error);
        }); 

})

module.exports = router;