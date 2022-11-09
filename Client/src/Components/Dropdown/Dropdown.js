import React from 'react';
import "./Dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

export default function Dropdown({info, path}) {
  const {array, name} = info
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const value = e.target.outerText
  }

  return (
    <div className="dropdown">
      <div className="dropbtn"><Link to={`${path}`}>{name}</Link></div>
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
