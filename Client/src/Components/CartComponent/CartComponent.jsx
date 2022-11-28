import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCart from "./CardCart";
import Error from "../Card/imgs/error.webp";
import { updateUser } from "../../redux/Actions/Actions";
import "./CartComponent.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { linkMp } from "../../redux/Actions/Actions";

export default function CartComponent() {
  const allCart = useSelector((state) => state.cart);
  const MercadoPagoUrl = useSelector((state) => state.MercadoPagoUrl);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const { isAuthenticated } = useAuth0();
  const datosEnMiBD = useSelector((state) => state.User);

  // console.log("es mp:", MercadoPagoUrl);

  let precioTotal = 0;
  let total = 0;

  for (let i = 0; i < allCart.length; i++) {
    total = allCart[i].price * allCart[i].quantity;

    if (total > 0) precioTotal = total + precioTotal;
  }

  useEffect(() => {
    if (allCart.length) {
      localStorage.setItem("Cart-pf", JSON.stringify(allCart));
      if (isAuthenticated) {
        dispatch(updateUser(datosEnMiBD._id, { cart: allCart }));
      }
    }
    if (isAuthenticated) {
      if (!allCart.length) {
        setDisabled(true);
      }
    } else if (allCart.length) {
      setDisabled(true);
    }
  }, [allCart]);

  async function mercadopago() {
    //if (theLink) window.location.href = theLink;
    const data = {
      name: datosEnMiBD.name + " " + datosEnMiBD.lastname,
      email: datosEnMiBD._id,
      cart: datosEnMiBD.cart,
    };
    //console.log("hice click en el boton de comprar - data:",data)
    dispatch(linkMp(data));
    /* if (MercadoPagoUrl.length) {
      return (window.location.href = MercadoPagoUrl);
    } */
  }

  useEffect(()=>{
    if (MercadoPagoUrl.length){
      //console.log("ahora si tengo URL, y soy:",MercadoPagoUrl)
      window.location.href = MercadoPagoUrl
    }
    
  },[MercadoPagoUrl])


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
              user={datosEnMiBD}
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
          onClick={() => mercadopago()}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
