import React from 'react';
import { Link } from "react-router-dom";

const BrandCard = (props) => {
    return (
        <Link to={`/brands/${props.name}`} id="a_card">
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
            <a 
            className="brand_name"
            key={props.id}
            name={props.name}
            >
            {props.name ? props.name.toUpperCase() : "There is not name provided"}
            </a>        
        </div>
        </Link>
    );
}

export default BrandCard;
