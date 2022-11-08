import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <div className="cardContainer">

      <div id="card" key={props._id}>
        <p>{props.name}</p>
        <p>{props.category}</p>
        <p>{props.description}</p>
        <p>{props.origin}</p>
        <p>{props.origin}</p>
        <p>{props.stock}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
}
