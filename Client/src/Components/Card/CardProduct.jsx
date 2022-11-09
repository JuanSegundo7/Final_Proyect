import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  console.log(props)
  return (
    <div key={props._id}>
      <img src={props.img} alt="img not found"/>
      <Link to={props._id}>
        <p>{props.name}</p>
      </Link>
      <p>{props.description}</p>
      <p>{props.brand}</p>
      <p>{props.stock}</p>
      <p>{props.type}</p>
    </div>
  );
}
