import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export function Card(props) {
  return (
    <div className="cardContainer">
      <div id="card" key={props._id}>
        <Link to={"coffee/" + props._id}>
          <p>{props.name}</p>
        </Link>
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
