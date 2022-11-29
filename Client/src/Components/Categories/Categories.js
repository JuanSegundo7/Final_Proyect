import React from "react";
import "./Categories.css";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Categories = ({navbar}) => {
  const brands = useSelector((state) => state.BrandsCopy);

  const Brands = {
    array: brands,
    name: "Brands",
  };

  return (
    <nav id="Categorys" className={navbar ? "navbar active desktop-visible" : "desktop-visible"}>
      <ul id="Categorys">
        <li>
          <Link to="/coffees">
            <div className="div-button-categories">Coffees</div>
          </Link>
        </li>
        <li>
        <Link to="/products/coffee-maker">
          <div className="div-button-categories">Coffee-Maker</div>
        </Link>
        </li>
        <li>
        <Link to="/products/accesories">
          <div className="div-button-categories">Accessories</div>
        </Link>
        </li>
        <li>
        <Link to="/products/others">
          <div className="div-button-categories">Others</div>
        </Link>
        </li>
        <li>
          <Dropdown info={Brands} path="/brands" />
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
