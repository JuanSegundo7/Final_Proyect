import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClickeableStars from "../Comments/ClickeableStars"
//import { useState } from "react";

export default function DetailComment(props){
    const dispatch = useDispatch();
    const UserDb = useSelector((state) => state.User);
    const cart = useSelector((state) => state.cart);
    //console.log("sos props o te haces?",props)
    return(
        <div>
            <div id="Card-cart">
                <div className="flex-card-info">
                    <img src={props.img} alt="img not found" className="imgCard"/>
                    <p id="cart-card-price">
                        {props.name
                        ? props.name.toUpperCase()
                        : "There is not name provided"}
                    </p>
                    <p id="cart-card-price">Quantity: {props.quantity}</p>
                    <p id="cart-card-price">Subtotal: ${props.price * props.quantity}</p>
                    <p id="cart-card-price">Rate this product<ClickeableStars _id={props._id}/></p>
                </div>
            </div>
        </div>
    )

}