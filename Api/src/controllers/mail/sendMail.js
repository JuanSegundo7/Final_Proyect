const nodemailer = require('nodemailer');

const sendEmail = async (email , data)=>{
    // dos objetos que nos van a permitir el envio del correo
    // el trasnporter y el de envio de correo
    // const reg = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    // const funciona = reg.test(email);
    // if(!funciona) throw new Error("Error en la validacion del mail.")
    const { name , image , price, totalPrice} = data
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
        to: email, // list of receivers
        subject: "Has hecho una compra en Tiger Coffee ☕", // Subject line
        text: "Hello world?", // plain text body
        html: ` <div>
                    <h2>${name} has hecho una compra de cafes de especialidad ☕ </h2>
                    <p>La compra fue efectuada de manera correcta, y te va a estar llegando la informacion de la transaccion via app MercadoPago.</p>
                    <p>Resumen de tu compra:</p>
                    <img src=${image} width="200px" height="200px"/>
                    <p>Precio del producto: US$${price}</p>
                    <p>Monto de descuento: - </p>
                    <p>El precio total fue de: US$${totalPrice}</p>
                    <p>Para seguir comprando, debe hacerlo por la Pagina: http://localhost:3000</p>
                    <p>${name} nuevamente te ofrecemos nuestros agradecimientos por la compra.</p>
                    <img src="https://josesanjuan.es/blog/wp-content/uploads/2016/09/Muchas-gracias.jpg" width="400px" height="200px" />
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