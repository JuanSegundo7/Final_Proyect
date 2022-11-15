import React from "react";
import { Link } from "react-router-dom";
import Error from "./imgs/error.webp";
import "./Card.css";

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
        <p id="origin">{props.origin}</p>
        <p>US$ {props.price}</p>
        <button type="submit" className="button">
          Add to cart{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
          </svg>
        </button>
      </div>
    );
  }
}
