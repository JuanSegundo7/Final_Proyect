import React, {useEffect} from 'react';
import "./Categories.css"
import Dropdown from "../Dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../redux/Actions/Actions";

const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    },[])

    const allCagetory = useSelector((state) => state.category);
    
    const Categories = { 
        array: allCagetory, 
        name: "Categories" 
    };
    
    const Products = {
        array: [],
        name: "Products",
    };

    const Brands = {
        array: [],
        name: "Brands",
    };

    const Cleaning = {
        array: [],
        name: "Cleaning Kits",
    };

    const Combos = {
        array: [],
        name: "Combos",
    };

    const CoffeeMaker = {
        array: [],
        name: "Coffee Maker",
    };

    return (
        <nav id="Categorys">
            <ul id="Categorys">
                <li>
                    <Dropdown info={Categories} path="/coffees"/>
                </li>
                <li>
                    <Dropdown info={Products} path="/products"/>
                </li>
                <li>
                    <Dropdown info={CoffeeMaker} path="/products/coffee-maker"/>
                </li>
                <li>
                    <Dropdown info={Cleaning} path="/products/cleaning-kits"/>
                </li>
                {/* <li>
                    <Dropdown info={Combos} path="/coffee/combos"/>
                </li> */}
                <li>
                    <Dropdown info={Brands} path="/brands"/>
                </li>
            </ul>
      </nav>
    );
}

export default Categories;
