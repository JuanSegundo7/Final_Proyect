import React from "react";
import { Link } from "react-router-dom";
import Error from "./imgs/error.webp";
import Favorite from "../Favorite/Favorite";
import "./Card.css";
import Cart from "../Cart/Cart";

export function Card(props) {
  if (props.brand === "Brands") {
    return (
      <div id="card">
        <img
          src={!props.img && props.img2 ? props.img2 : props.img}
          alt="img not found"
          className="imgCard_brand"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = Error;
          }}
        />
        <p className="brand_name">
          {props.name ? props.name.toUpperCase() : "There is not name provided"}
        </p>
      </div>
    );
  } else {
    return (
      <div id="card">
        <Favorite id={props._id} />
        <Link to={`/detail/${props._id}`} id="a_card">
          <img
            src={!props.img && props.img2 ? props.img2 : props.img}
            alt="img not found"
            className="imgCard"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Error;
            }}
          />
        </Link>
        <p id="name">
          {props.name ? props.name.toUpperCase() : "There is not name provided"}
        </p>
        {props.origin ? <p id="origin">{props.origin}</p> : null}
        <p id="price">US$ {props.price}</p>
        {/* <p>{props.stock}</p> */}
        <Cart id={props._id} />
      </div>
    );
  }
}
