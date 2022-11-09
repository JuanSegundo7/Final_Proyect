import React from 'react';
import "./Dropdown.css";
import { useDispatch, useSelector } from "react-redux";

export default function Dropdown({info}) {
  const {array, name} = info
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const value = e.target.outerText
  }

  return (
    <div className="dropdown">
      <div className="dropbtn"><p>{name}</p></div>
      <div className="dropdown-content">
        <div className="dropdown-limit">
        {array.length > 0 && array.map((array) => {
          return (
            <a key={array.id} value={array.name} onClick={handleClick}>{array.name}</a>
            )
          })}
          </div>
        </div>
    </div>
  )
}
