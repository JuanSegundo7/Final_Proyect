import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardCart from './CardCart'
import Error from '../Card/imgs/error.webp'
import { clearCart ,sendEmail } from '../../redux/Actions/Actions';


export default function CartComponent() {
    const allCart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (allCart.length) {
          localStorage.setItem("Cart-pf", JSON.stringify(allCart));
        }
      }, [allCart]);

    function emptyCart(e){
        if(allCart.length){
            dispatch(clearCart())
        } else{
            alert('No hay nada en el carrito') //cambiar esto
        }
    }

    function sendMail(){
        const data = {
            email: "levyguidocarp@gmail.com",
            name : "Guido",
            image : allCart[0].image.url,
            price : allCart[0].price ,
            totalPrice : allCart[0].price * allCart[0].quantity,
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
