import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByQuery,
  filter,
  cleanFiltered,
  cleanByName,
  cleanOrder,
  sortFilter,
} from "../../redux/Actions/Actions";
import "./Filter.css";

export default function ({ info, order }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const Filter = useSelector((state) => state.Filter);
  const state = useSelector((state) => state[info]);

  const [price, setPrice] = useState({
    min: 1,
    max: 500,
  });

  const [disabled, setDisabled] = useState({
    orderName: false,
    orderStock: false,
  });

  useEffect(() => {
    setPrice({
      min: 1,
      max: 500,
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
    setDisabled({ ...disabled, orderName: true });
    const value = e.target.value;
    if (Filter) dispatch(sortFilter(value));
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
    setDisabled({ ...disabled, orderStock: true });
    const value = e.target.value;
    if (Filter) dispatch(sortFilter(value));
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
    document.getElementById("range2").value = 500;
    document.getElementById("order").selectedIndex = 0;
    document.getElementById("order2").selectedIndex = 0;
    setPrice({ min: 1, max: 500 });
    dispatch(cleanFiltered());
    dispatch(
      getProductByQuery("category", `${order}`, `${order}`, `orderedbyname=ASC`)
    );
  };

  return (
    <div>
      <div className="filters">
        <div className="menuFilters">
          <button onClick={(e) => handleReset(e)} className="buttonFilter">
            Reset filters
          </button>
          <div>
            <select onChange={(e) => orderName(e)} id="order">
              <option disabled={disabled.orderName}>Order by name</option>
              <option value="ASC"> A-Z </option>
              <option value="DES">Z-A</option>
            </select>
          </div>
          <div className="filterPrice">
            <input
              type="range"
              min="1"
              max="500"
              value={price.min}
              onChange={(e) => handlePriceMin(e)}
              id="range1"
            />

            <input
              type="range"
              min="1"
              max="500"
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
              <option disabled={disabled.orderStock}>Stock</option>
              <option value="ASC"> Menos Stock</option>
              <option value="DES"> Mas Stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
