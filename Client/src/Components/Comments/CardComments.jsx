import React from "react";
import Error from "../Card/imgs/error.webp"
import "../Card/Card.css";

export function Card({ comment, user }) {

  return (
      <div id="CardComment">
        <div id="cardcomponent-top">
          <div id="cardcomponent-top-container">  
          <img
            src={!user || !user.picture  ? null : user.picture}
            alt="img not found"
            className="imgCard"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Error;
            }}
            />
            </div>
            <p>{user && user.name}</p>
        </div>
        <h2>
          {comment}
        </h2>
      </div>
    );
}
