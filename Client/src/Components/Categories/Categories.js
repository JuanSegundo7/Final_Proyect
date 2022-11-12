import React, {useEffect} from 'react';
import "./Categories.css"
import Dropdown from "../Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
// import { getCategory } from "../../redux/Actions/Actions";
import { Link } from "react-router-dom"

const Categories = () => {
    const dispatch = useDispatch()
    const allCategory = useSelector((state) => state.category);


    // const coffeeMaker = allCategory.filter(coffe => coffe.type === "Coffee Maker")
    // const coffees = allCategory.filter(coffe => coffe.type === "Coffee")

    const Coffees = { 
        array: [], 
        name: "Coffees" 
    };
    
    const Accesories = {
        array: [],
        name: "Accesories",
    };

    const Brands = {
        array: [],
        name: "Brands",
    };

    const Products = {
        array: [],
        name: "Products",
    };

    const CoffeeMaker = {
        array: [],
        name: "Coffee-Maker",
    };

    return (
        <nav id="Categorys">
            <ul id="Categorys">
                <li>
                    <Link to="/coffees"><Dropdown info={Coffees} path="/coffees"/></Link>
                </li>
                <li>
                    <Dropdown info={Products} path="/products"/>
                </li>
                <li>
                    <Dropdown info={CoffeeMaker} path="/products/coffee-maker"/>
                </li>
                <li>
                    <Dropdown info={Accesories} path="/products/accesories"/>
                </li>
                <li>
                    <Dropdown info={Brands} path="/brands"/>
                </li>
            </ul>
      </nav>
    );
}

export default Categories;
