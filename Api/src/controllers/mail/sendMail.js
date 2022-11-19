const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL_USER,  EMAIL_PASSWORD } = process.env;


const sendEmail = async (data)=>{
    // const reg = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    // const funciona = reg.test(email);
    // if(!funciona) throw new Error("Error en la validacion del mail.")
    const { email, name , cart , /* price, */ totalPrice} = data
    const upperCaseName = name.toUpperCase();

    //en principio hay un solo producto que mando por correo (el [0]).
    //Despues tendremos que hacer un map
    //console.log("cart:",cart)
    
    const mail ={
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
    const configuration = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: mail.user, // generated ethereal user
            pass: mail.pass, // generated ethereal password
          },
    }
    const mensaje = {
        from: `"Tiger Coffee ☕" <${mail.user}>`, // sender address
        to: email, // list of receivers
        subject: "Thank you for buying in Tiger Coffee Store ☕", // Subject line
        text: "Hello world?", // plain text body
        html: ` <div>
                    <h2>${upperCaseName} We are happy to let you know that we've received your coffee order ☕ </h2>
                    <p>Once your package ships, we will send you an email with a tracking number and link so you can see the movement of it.</p>
                    <h4>Purchase Summary:</h4>
                    <p>Product: ${cart[0].name}</p>
                    <p>Unit Price: ${cart[0].price}</p>
                    <p>Total Price: US$${totalPrice}</p>
                    <p>To keep buying, please go to: http://localhost:3000</p>
                    <p>${upperCaseName} We thank you once again for trusting us!</p>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1668883704/ynhwwb7jrqukf6esg1ya.jpg" width="200px" height="200px" />
                </div>`, // html body
    }
    // TRANSPORTER
    const trasport = nodemailer.createTransport(configuration);

    //ENVIO
    const info = await trasport.sendMail(mensaje)//info de retorno de lo que nos devuelve
    return;
}

// sendEmail("levyguidocarp@gmail.com", "Franco")

module.exports = sendEmail;