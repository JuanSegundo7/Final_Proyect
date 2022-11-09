import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div className="cardContainer">
      <div key={props._id} id="card">
        <img src={props.img} alt="img not found" className="imgCard" />
        <Link to={props._id}>
          <p>{props.name}</p>
        </Link>
        <p>{props.description}</p>
        <p>{props.brand}</p>
        <p>{props.stock}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
}
