import React from "react";
import { Link } from "react-router-dom";
import Error from "./imgs/error.webp";
import "./Card.css";

export function Card(props) {
  return (
    <div id="card">
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
      <p id="name">{props.name ? props.name : "There is not name provided"}</p>
      <p id="origin">{props.origin}</p>
      <p>US$ {props.price}</p>
      <input type="submit" className="button" value="Add to cart" />
    </div>
  );
}
