import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCart from "./CardCart";
import Error from "../Card/imgs/error.webp";
import { clearCart, sendEmail } from "../../redux/Actions/Actions";
import "./CartComponent.css";

export default function CartComponent() {
  const allCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let precioTotal = 0;

  let total = 0;

  for (let i = 0; i < allCart.length; i++) {
    total = allCart[i].price * allCart[i].quantity;

    if (total > 0) precioTotal = total + precioTotal;
  }

  useEffect(() => {
    if (allCart.length) {
      localStorage.setItem("Cart-pf", JSON.stringify(allCart));
    }
  }, [allCart]);

  function emptyCart(e) {
    if (allCart.length) {
      dispatch(clearCart());
    } else {
      alert("No hay nada en el carrito"); //cambiar esto
    }
  }

  // function sendMail(){//ESTO NO VA A ESTAR ASI!! EL SEND EMAIL ES OTRA COSA, VAMOS A CAMBIAR EL NOMBRE DE LA FUNCION PERO VAMOS A DISPACHAR ESTO + LA PASARELA DE PAGO? O SOLO EL EMAIL
  //     if(user){
  //         dispatch(sendEmail())
  //     } else {
  //         loginWithRedirect()
  //     }
  const datosEnMiBD = useSelector((state) => state.User);
  //Con esto fuerzo a que se renderice nuevamente cuando efectivamente se carguen los datos de mi BD.
  useEffect(() => {
    if (datosEnMiBD.hasOwnProperty("_id")) {
      //console.log("Datos de mi BD CART:", datosEnMiBD);
    }
  }, [datosEnMiBD]);

  function sendMail() {
    const data = {
      email: datosEnMiBD._id,
      name: datosEnMiBD.name + " " + datosEnMiBD.lastname,
      cart: datosEnMiBD.cart,
      //image : allCart[0].image.url,   //completar. Está todo en "datosEnMiBD"
      price: allCart[0].price, //completar. Está todo en "datosEnMiBD"
      totalPrice: allCart[0].price * allCart[0].quantity, //completar. Está todo en "datosEnMiBD"
    };
    dispatch(sendEmail(data));
  }

  console.log(allCart);

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
        <button id="final-button" onClick={() => sendMail()}>
          Buy
        </button>
      </div>
    </div>
  );
}
