import React from "react";
import ClickeableStars from "../Comments/ClickeableStars"

export default function DetailCardComment(props){
    
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
                    <p id="cart-card-price">Rate this product<ClickeableStars setRatingFunction={props.setRatingFunction} _id={props._id}/></p>
                </div>
            </div>
        </div>
    )

}