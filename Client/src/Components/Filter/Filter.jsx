import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByQuery,
  filter,
  cleanFiltered,
} from "../../redux/Actions/Actions";
import "./Filter.css";

export default function ({ info, order }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const Brands = useSelector((state) => state.Brands);
  const state = useSelector((state) => state[info]);
  const Filtered = useSelector((state) => state.Filtered);
  const Filter = useSelector((state) => state.Filter);

  const [price, setPrice] = useState({
    min: 1,
    max: 200,
  });

  useEffect(() => {
    setPrice({
      min: 1,
      max: 200,
    });
  }, [location.pathname]);

  function handlePriceMin(e) {
    e.preventDefault();
    setPrice({ ...price, min: parseInt(e.target.value) });
    dispatch(filter(price, info));
  }

  function handlePriceMax(e) {
    e.preventDefault();
    setPrice({ ...price, max: parseInt(e.target.value) });
    dispatch(filter(price, info));
    //-> ver si quiero mandar ya desde aca el array(el estado global de cafes o hacerlo desde el reducer)
  }

  const orderName = (e) => {
    const value = e.target.value;
    switch (state) {
      case state: {
        dispatch(
          getProductByQuery(
            "category",
            `${order}`,
            `${order}`,
            `orderedbyname=${value}`
          )
        );
      }
    }
  };

  const handleOrderStock = (e) => {
    const value = e.target.value;
    switch (state) {
      case state: {
        dispatch(
          getProductByQuery(
            "category",
            `${order}`,
            `${order}`,
            `orderedbystock=${value}`
          )
        );
      }
    }
  };

  const handleReset = (e) => {
    document.getElementById("range1").value = 1;
    document.getElementById("range2").value = 200;
    document.getElementById("order").selectedIndex = 0;
    document.getElementById("order2").selectedIndex = 0;
    setPrice({ min: 1, max: 200 });
    dispatch(cleanFiltered());
  };

  // si primero hacemos el filtro el ordenado no funciona, creo que es porque el filtrado tiene su propio estado global,
  // minetras q el ordenado tiene otro estado global.

  return (
    <div>
      <div className="filters">
        <div className="menuFilters">
          <button onClick={(e) => handleReset(e)} className="buttonFilter">
            Reset filters
          </button>
          <div>
            <select onChange={(e) => orderName(e)} id="order">
              <option>Order by name</option>
              <option value="ASC"> A-Z </option>
              <option value="DES">Z-A</option>
            </select>
          </div>
          <div className="filterPrice">
            <input
              type="range"
              min="1"
              max="200"
              value={price.min}
              onChange={(e) => handlePriceMin(e)}
              id="range1"
            />

            <input
              type="range"
              min="1"
              max="200"
              value={price.max}
              onChange={(e) => handlePriceMax(e)}
              id="range2"
            />
            {
              <span>
                From {price.min} to {price.max} USD
              </span>
            }
          </div>

          <div>
            <select onChange={(e) => handleOrderStock(e)} id="order2">
              <option>Stock</option>
              <option value="ASC"> Menos Stock</option>
              <option value="DES"> Mas Stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
