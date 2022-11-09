import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ContenidoCoffes/Contenido.css";

export default function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);

  const handlerPrice = (e) => {
    console.log(e.target.value, "es el value");
  };

  return (
    <div id="Contenido">
      <section id="Products">
        <div className="filters">
          <div className="menuFilters">
            <select>
              <option value="ASC">A-Z</option>
              <option value="DES">Z-A</option>
            </select>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="50000"
          onChange={(e) => handlerPrice(e)}
        />
      </section>
    </div>
  );
}
