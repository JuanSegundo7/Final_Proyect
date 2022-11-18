const nodemailer = require('nodemailer');

const sendEmail = async (/*email,name*/)=>{
    // dos objetos que nos van a permitir el envio del correo
    // el trasnporter y el de envio de correo
    // const reg = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    // const funciona = reg.test(email);
    // if(!funciona) throw new Error("Error en la validacion del mail.")
    
    const mail ={
        user: 'tiger.coffee.information@gmail.com', // correo
        pass: 'ttllmhvqjaaxjxvw'
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
        to: "levyguidocarp@gmail.com", // list of receivers
        subject: "Has hecho una compra en Tiger Coffee ☕", // Subject line
        text: "Hello world?", // plain text body
        html: ` <div>
                    <h2>Guido has hecho una compra de cafes de especialidad ☕ </h2>
                    <p>La compra fue efectuada de manera correcta, y te va a estar llegando la informacion de la transaccion via app MercadoPago.</p>
                    <p>Tu compra:</p>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1668018725/Tiger%20Coffee/Coffees/Cafe_Colombia_b24kw9.png" width="200px" height="200px"/>
                    <p>Para seguir comprando, debe hacerlo por la Pagina: http://localhost:3000</p>
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