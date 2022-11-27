import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByQuery,
  filter,
  cleanFiltered,
  sortFilter,
} from "../../redux/Actions/Actions";
import "./Filter.css";

export default function ({ info, order }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const state = useSelector((state) => state[info]);
  const Filter = useSelector((state) => state.Filter);
  const Search = useSelector((state) => state.Search);
  const Price = useSelector((state) => state.Price);
  const FavoritesBoolean = useSelector((state) => state.FavoriteBoolean);

  const ProductsBrand = useSelector((state) => state.ProductsBrand);
  // console.log("ESTOY EN FILTER ProductsBrand:", ProductsBrand);

  const [price, setPrice] = useState({
    min: 1,
    max: 500,
  });

  const [disabled, setDisabled] = useState({
    orderName: false,
    orderStock: false,
    orderPrice: false,
  });

  useEffect(() => {
    setPrice({
      min: 1,
      max: 500,
    });
  }, [location.pathname, state]);

  useEffect(() => {
    dispatch(cleanFiltered());
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

    if (Filter) dispatch(sortFilter(value, "Filtered", "name"));
    if (Search) dispatch(sortFilter(value, "ByName", "name"));
    if (Price) dispatch(sortFilter(value, "OrderPrice", "name"));
    if (FavoritesBoolean) dispatch(sortFilter(value, "FavoritesCopy", "name"));
    if (ProductsBrand.length)
      dispatch(sortFilter(value, "ProductsBrand", "name"));

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

    if (Filter) dispatch(sortFilter(value, "Filtered", "stock"));
    if (Search) dispatch(sortFilter(value, "ByName", "stock"));
    if (Price) dispatch(sortFilter(value, "OrderPrice", "stock"));
    if (FavoritesBoolean) dispatch(sortFilter(value, "FavoritesCopy", "stock"));
    if (ProductsBrand.length)
      dispatch(sortFilter(value, "ProductsBrand", "stock"));

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

  const handleOrderPrice = (e) => {
    setDisabled({ ...disabled, orderPrice: true });
    const value = e.target.value;

    if (Filter) dispatch(sortFilter(value, "Filtered", "price"));
    if (Search) dispatch(sortFilter(value, "ByName", "price"));
    if (Price) dispatch(sortFilter(value, "OrderPrice", "price"));
    if (FavoritesBoolean) dispatch(sortFilter(value, "FavoritesCopy", "price"));
    if (ProductsBrand.length)
      dispatch(sortFilter(value, "ProductsBrand", "price"));

    switch (state) {
      case state: {
        dispatch(
          getProductByQuery(
            "category",
            `${order}`,
            `${order}`,
            `orderedbyprice=${value}`
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
    document.getElementById("order3").selectedIndex = 0;
    setPrice({ min: 1, max: 500 });
    dispatch(cleanFiltered());
    dispatch(getProductByQuery("category", `${order}`, `${order}`));
  };

  return (
    <div>
      <div className="filters">
        <div className="menuFilters">
          <button onClick={(e) => handleReset(e)} className="buttonFilter">
            Reset filters
          </button>

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
            <select onChange={(e) => orderName(e)} id="order">
              <option disabled={disabled.orderName}>Order by name</option>
              <option value="ASC"> A-Z </option>
              <option value="DES">Z-A</option>
            </select>
          </div>

          <div>
            <select onChange={(e) => handleOrderStock(e)} id="order2">
              <option disabled={disabled.orderStock}>Stock</option>
              <option value="ASC"> Less Stock</option>
              <option value="DES"> More Stock</option>
            </select>
          </div>

          <div>
            <select onChange={(e) => handleOrderPrice(e)} id="order3">
              <option disabled={disabled.orderPrice}>Price</option>
              <option value="ASC"> Less Price</option>
              <option value="DES"> More Price</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
