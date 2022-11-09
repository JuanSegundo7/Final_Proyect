import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div key={props._id}>
      <Link to={"products/" + props._id}>
        <p>{props.name}</p>
      </Link>
      <p>{props.description}</p>
      <p>{props.brand}</p>
      <p>{props.stock}</p>
      <p>{props.type}</p>
    </div>
  );
}
