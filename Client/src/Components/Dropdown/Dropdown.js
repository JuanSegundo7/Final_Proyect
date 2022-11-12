import React from "react";
import "./Dropdown.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Dropdown({ info, path }) {
  const { array, name } = info;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const value = e.target.outerText;
  };

  return (
    <div className="dropdown">
      <Link to={`${path}`}>
        <div className="dropbtn">{name}</div>
      </Link>
      <div className="dropdown-content">
        <div className="dropdown-limit">
          {array.length > 0 &&
            array.map((array) => {
              return (
                <Link to={`${path}/${array.name}`}>
                  <a key={array.id} value={array.name} onClick={handleClick}>
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
