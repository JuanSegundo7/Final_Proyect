import React from "react";
import { Link } from "react-router-dom";
import Error from "./imgs/error.webp";
import Favorite from "../Favorite/Favorite";
import { useDispatch } from "react-redux";
import "./Card.css";
import CartButton from "../Cart/CartButton";
import { getProductByQuery } from "../../redux/Actions/Actions";

export function Card(props) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const value = e.target.name;
    dispatch(getProductByQuery("brand", "brand", value));
  };

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
        <Link to={`/brands?brand=${props.name}`} id="a_card">
        <a 
          className="brand_name"
          key={props.id}
          name={props.name}
          onClick={(e) => handleClick(e)}
        >
          {props.name ? props.name.toUpperCase() : "There is not name provided"}
        </a>        
        </Link>
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
        <CartButton id={props._id} />
      </div>
    );
  }
}
