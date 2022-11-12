import React from "react";
import { Link } from "react-router-dom";
import Error from "./imgs/error.webp"
import "./Card.css";

export function Card(props) {
  //console.log(props)
  return (
    <Link to={props._id} id="a_card">
      <div id="card" key={props._id}>
          <img src={props.img} alt="img not found" className="imgCard"  onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src=Error;}}/>
            <p id="name">{props.name}</p>
          <p id="origin">{props.origin}</p>
          <p>{props.price}</p>
          <input type="submit" className="button" value="Add to cart" /> 
      </div>
    </Link>
  );
}
