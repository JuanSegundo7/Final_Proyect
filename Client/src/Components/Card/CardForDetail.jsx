import React from "react";
import Error from "./imgs/error.webp";
import Favorite from "../Favorite/Favorite";
import "./Card.css";
import CartButton from "../Cart/CartButton";

export function Card(props) {
  return (
      <div id="card">
        <Favorite id={props._id} />
        <a href={`/detail/${props._id}`} id="a_card">
          <img
            src={!props.img && props.img2 ? props.img2 : props.img}
            alt="img not found"
            className="imgCard"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Error;
            }}
          />
        </a>
        <p id="name">
          {props.name ? props.name.toUpperCase() : "There is not name provided"}
        </p>
        {props.origin ? <p id="origin">{props.origin}</p> : null}
        <p id="price">US$ {props.price}</p>
        {/* <p>{props.stock}</p> */}
        <CartButton id={props._id} />
      </div>
    );
}