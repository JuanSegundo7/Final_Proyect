import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardCart from './CardCart'
import Error from '../Card/imgs/error.webp'
import { clearCart ,sendEmail } from '../../redux/Actions/Actions';
import { useAuth0 } from "@auth0/auth0-react";

export default function CartComponent() {
    const allCart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { user, loginWithRedirect } = useAuth0();
    
    useEffect(() => {
        if (allCart.length) {
            localStorage.setItem("Cart-pf", JSON.stringify(allCart));
        }
    }, [allCart]);

    function emptyCart(e){
        if(allCart.length){
            dispatch(clearCart())
        } 
        else{
            alert('No hay nada en el carrito') //cambiar esto
        }
    }

    // function sendMail(){//ESTO NO VA A ESTAR ASI!! EL SEND EMAIL ES OTRA COSA, VAMOS A CAMBIAR EL NOMBRE DE LA FUNCION PERO VAMOS A DISPACHAR ESTO + LA PASARELA DE PAGO? O SOLO EL EMAIL
    //     if(user){
    //         dispatch(sendEmail())
    //     } else {
    //         loginWithRedirect()
    //     }
    const datosEnMiBD = useSelector((state) => state.User);
    useEffect(()=>{
    if (datosEnMiBD.hasOwnProperty("_id")){
        //console.log("Datos de mi BD CART:",datosEnMiBD);
    }
    if (datosEnMiBD.hasOwnProperty("error")){
        //console.log("No existo y debería crearlo.CART");    
    };
    },[datosEnMiBD]);

    function sendMail(){
        const data = {
            email: datosEnMiBD._id,
            name : datosEnMiBD.name + " " + datosEnMiBD.lastname,
            image : allCart[0].image.url,   //completar. Está todo en "datosEnMiBD"
            price : allCart[0].price ,  //completar. Está todo en "datosEnMiBD"
            totalPrice : allCart[0].price * allCart[0].quantity,  //completar. Está todo en "datosEnMiBD"
        }
        dispatch(sendEmail(data))
    }

  return (
 
    <div>
        <button onClick={()=> sendMail()}>Buy</button>
        <button onClick={(e) => emptyCart(e)}>Empty Cart</button>{/* cambiar esto */}
        {
            allCart.length ?
            allCart.map((cardCoffe) =>
                <CardCart
                    img={
                        !cardCoffe.image || cardCoffe.image === null
                        ? Error
                        : cardCoffe.image.url
                    }
                    img2={cardCoffe.image && cardCoffe.image}
                    key={cardCoffe._id}
                    _id={cardCoffe._id}
                    name={cardCoffe.name}
                    origin={cardCoffe.origin}
                    type={cardCoffe.grinding_type}
                    price={cardCoffe.price}
                    quantity={cardCoffe.quantity}
                />
            )
            :'No hay productor perro'
        }
    </div> 
  )
}

