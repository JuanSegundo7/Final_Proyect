import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {  addToCart,  updateUser } from "../../redux/Actions/Actions";
=======
import { addToCart, updateUser } from "../../redux/Actions/Actions";
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb
import AddProductAlert from "../Alert/AddProduct";

export default function Cart({ id }) {
  const dispatch = useDispatch();
  const datosEnMiBD = useSelector((state) => state.User);
  const allCart = useSelector((state) => state.cart);
  const { isAuthenticated } = useAuth0();

  function handleToCart(e) {
    AddProductAlert()
<<<<<<< HEAD
     dispatch(addToCart(id)); 
=======
    dispatch(addToCart(id));
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb
  }

  useEffect(() => {
    if (allCart.length) {
      localStorage.setItem("Cart-pf", JSON.stringify(allCart));
      
      if (isAuthenticated){
        dispatch(updateUser(datosEnMiBD._id,{cart:allCart}));
      }
    } 
  }, [allCart]);

  
  return (
    <div className="Cart-container">
      <button className="button" onClick={(e) => handleToCart(e)}>
        Add to cart
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
        </svg>
      </button>
    </div>
  );
}
