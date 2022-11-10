import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productNameAZ, productNameZA } from "../../redux/Actions/Actions";
import "./FilterProducts.css";

export default function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
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
      <section id="Products">
        <div className="filteres">
          <div className="menuFilters">
            <div>
              <select onChange={(e) => handlerOrdered(e)}>
                <option>FILTER</option>
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
                <option>Mas Vendidos</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
