import React from "react";
import "./Dropdown.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  cleanFiltered,
  getBrands,
  getProductByQuery,
  cleanByName
} from "../../redux/Actions/Actions";

export default function Dropdown({ info, path }) {
  const { array, name } = info;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const value = e.target.text;
    dispatch(getProductByQuery("brand", "brand", value));
    cleanByName()
  };

  // const handleReset = () => {
  //   dispatch(getBrands());
  //   dispatch(getProductByQuery("category", "coffee", "coffee"));
  //   dispatch(getProductByQuery("category", "coffee-maker", "coffee-maker"));
  //   dispatch(getProductByQuery("category", "accessories", "accessories"));
  //   dispatch(getProductByQuery("category", "others", "others"));
  //   dispatch(cleanFiltered());
  // };

  return (
    <div className="dropdown">
      <Link to={`${path}`}>
        <div className="dropbtn">
          {name}
        </div>
      </Link>
      <div className="dropdown-content">
        <div className="dropdown-limit">
          {array && array.length > 0 &&
            array.map((array, index) => {
              return (
                <Link to={`${path}/${array.name}`} key={index}>
                  <a
                    key={array.id}
                    value={array.name}
                    onClick={(e) => handleClick(e)}
                  >
                    {array.name}
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
