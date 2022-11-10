import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productNameAZ, productNameZA } from "../../redux/Actions/Actions";
import "./FilterProducts.css";

export default function () {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  console.log(category, "esto es category");
  const [input, setInput] = useState({
    min: "",
    max: "",
  });

  const handlerPrice = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
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
                onChange={(e) => handlerPrice(e)}
              />
              MAX:
              <input
                name="max"
                type="range"
                min="1"
                max="5000"
                onChange={(e) => handlerPrice(e)}
              />
              {
                <span>
                  From {input.min} to {input.max} USD
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
