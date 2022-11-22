import React, { useEffect } from "react";
import "./Categories.css";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
// import { getCategory } from "../../redux/Actions/Actions";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.CategoriesCoffee);
  const brands = useSelector((state) => state.BrandsCopy);


  const Coffees = {
    array: [{ id: 1, name: "Fine Ground" }, { id: 2, name: "Coarse Ground" }, { id: 3, name: "Instant Ground" }],
    name: "Coffees",
  };

  const Accesories = {
    array: [{ id: 1, name: "Rechargeable Capsules" }, { id: 2, name: "Milk Frother" }],
    name: "Accesories",
  };

  const Brands = {
    array: brands,
    name: "Brands",
  };

  const Others = {
    array: [{ id: 1, name: "Cups" }, { id: 2, name: "Merchandise" }],
    name: "Others",
  };

  const CoffeeMaker = {
    array: [{ id: 1, name: "Coffee Maker" }],
    name: "Coffee-Maker",
  };

  return (
    <nav id="Categorys" className="desktop-visible">
      <ul id="Categorys">
        <li>
          <Link to="/coffees">
            <Dropdown info={Coffees} path="/coffees" />
          </Link>
        </li>
        <li>
          <Dropdown info={CoffeeMaker} path="/products/coffee-maker" />
        </li>
        <li>
          <Dropdown info={Accesories} path="/products/accesories" />
        </li>
        <li>
          <Dropdown info={Others} path="/products/others" />
        </li>
        <li>
          <Dropdown info={Brands} path="/brands" />
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
