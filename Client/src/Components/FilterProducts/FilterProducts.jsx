import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productNameAZ,
  productNameZA,
  filterMax,
  filterMin,
} from "../../redux/Actions/Actions";
import "./FilterProducts.css";

export default function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  // const category = useSelector((state) => state.category);
  const min = useSelector((state) => state.min);
  const max = useSelector((state) => state.max);

  // const [input, setInput] = useState({
  //   min: "",
  //   max: "",
  // });

  const handlerPriceMin = (e) => {
    e.preventDefault();
    // setInput({ ...input, [e.target.name]: e.target.value });
    // dispatch
    dispatch(filterMin(e.target.value, products));
  };

  const handlerPriceMax = (e) => {
    e.preventDefault();
    // setInput({ ...input, [e.target.name]: e.target.value });
    dispatch(filterMax(e.target.value, products));
  };

  const handlerOrdered = (e) => {
    e.preventDefault();
    e.target.value === "ASC"
      ? dispatch(productNameAZ(e.target.value))
      : dispatch(productNameZA(e.target.value));
  };

  return (
    <div id="container">
      <section id="ProductsP">
        <div className="filteres">
          <div className="menuFilteres">
            <div>
              <select onChange={(e) => handlerOrdered(e)}>
                <option>Order</option>
                <option value="ASC"> A-Z </option>
                <option value="DESC">Z-A</option>
              </select>
            </div>
            <div className="filterPrice">
              MIN:
              <input
                name="min"
                type="range"
                min="1"
                max="5000"
                // value={min}
                onChange={(e) => handlerPriceMin(e)}
              />
              MAX:
              <input
                name="max"
                type="range"
                min="1"
                // value={max}
                max="5000"
                onChange={(e) => handlerPriceMax(e)}
              />
              {
                <span>
                  From {min} to {max} USD
                </span>
              }
            </div>
            <div>
              <select>
                <option value="all">Category</option>
                <option value="all">Category 1</option>
                <option value="all">Category 2</option>
                <option value="all">Category 3</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
