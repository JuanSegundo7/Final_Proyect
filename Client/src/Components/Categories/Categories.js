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

  // console.log(allCategory);

  const Coffees = {
    array: [{id: 1 , name:"Grinding"}, {id: 2 , name: "Grinding"}],
    name: "Coffees",
  };

  const Accesories = {
    array: [],
    name: "Accesories",
  };

  const Brands = {
    array: brands,
    name: "Brands",
  };

  const Others = {
    array: [],
    name: "Others",
  };

  const CoffeeMaker = {
    array: [],
    name: "Coffee-Maker",
  };

  return (
    <nav id="Categorys">
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
