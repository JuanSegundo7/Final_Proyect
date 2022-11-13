import React from "react";
import "./Dropdown.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductByQuery } from "../../redux/Actions/Actions";

export default function Dropdown({ info, path }) {
  const { array, name } = info;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const value = e.target.text;
    dispatch(getProductByQuery("brand", "brand", value));
  };

  return (
    <div className="dropdown">
      <Link to={`${path}`}>
        <div className="dropbtn" onClick={array}>
          {name}
        </div>
      </Link>
      <div className="dropdown-content">
        <div className="dropdown-limit">
          {array.length > 0 &&
            array.map((array) => {
              return (
                <Link to={`${path}?brand=${array.name}`}>
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
