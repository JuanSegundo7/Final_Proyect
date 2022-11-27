import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCart from "./CardCart";
import Error from "../Card/imgs/error.webp";
<<<<<<< HEAD
import { sendEmail, updateUser } from "../../redux/Actions/Actions";
import "./CartComponent.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
=======
import { /* clearCart, */ sendEmail, updateUser } from "../../redux/Actions/Actions";
import "./CartComponent.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb

export default function CartComponent() {
  const allCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const { isAuthenticated } = useAuth0();
<<<<<<< HEAD
  const User = useSelector((state) => state.User);
=======
  const datosEnMiBD = useSelector((state) => state.User);
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb

  let precioTotal = 0;

  let total = 0;
  for (let i = 0; i < allCart.length; i++) {
    total = allCart[i].price * allCart[i].quantity;
    if (total > 0) precioTotal = total + precioTotal;
  }

  useEffect(() => {
    if (allCart.length) {
      localStorage.setItem("Cart-pf", JSON.stringify(allCart));
      if (isAuthenticated){
        console.log("estoy casi casi:",allCart)
        dispatch(updateUser(datosEnMiBD._id,{cart:allCart}));
        console.log("esto es justo despues olcaar:",allCart)
      }
    } else if (!allCart.length) {
      setDisabled(true);
    }
    // if(isAuthenticated){
    //   dispatch(updateUser(User._id, {cart: allCart}))
    // }
  }, [allCart]);

<<<<<<< HEAD
  const datosEnMiBD = useSelector((state) => state.User);
 
=======
  
  //Con esto fuerzo a que se renderice nuevamente cuando efectivamente se carguen los datos de mi BD.
  //useEffect(() => {
    /* if (datosEnMiBD.hasOwnProperty("_id")) {
    } */
  //}, [datosEnMiBD]);
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb

  function sendMail() {
    const data = {
      email: datosEnMiBD._id,
      name: datosEnMiBD.name + " " + datosEnMiBD.lastname,
      cart: datosEnMiBD.cart
    };
    console.log("soy cart en el front:",datosEnMiBD.cart)
    dispatch(sendEmail(data));
  }

  return (
    <div id="Cart">
      <div id="nav-cart">
        <h1>Cart ({allCart.length})</h1>
      </div>
      {allCart.length
        ? allCart.map((cardCoffe) => (
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
              stock={cardCoffe.stock}
            />
          ))
        : "There are no selected products!"}
      <div id="flex-total">
        <h1>
          <span id="total-price">
            {precioTotal >= 500 ? "Total with shipping" : "Total"}
          </span>{" "}
          ${precioTotal}
        </h1>
        <button
          id={disabled ? "final-button-disabled" : "final-button"}
          disabled={disabled}
          onClick={() => sendMail()}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
