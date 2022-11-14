import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByQuery, filter } from "../../redux/Actions/Actions";
import "./Filter.css";
// import {
//   coffeeStockAsc,
//   coffeeStockDes,
//   filterCoffeMax,
//   filterCoffeMin,
//   getCategory,
//   getCoffees,
// } from "../../redux/Actions/Actions";

export default function ({ info }) {
  const dispatch = useDispatch();
  const location = useLocation();
  //const allCoffees = useSelector((state) => state.allCoffees);
  // const allCagetory = useSelector((state) => state.category);
  const Brands = useSelector((state) => state.Brands);

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
  // const handlerBrand = (e) => {
  //   dispatch(filterBrands(e.target.value));
  // };

  function orderName(e) {
    const value = e.target.value;
    if (value == "DES") {
      switch (info) {
        case "CategoriesCoffee": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee",
              "coffee",
              "orderedbyname=DES",
              ""
            )
          );
        }

        case "CategoriesAccesories": {
          dispatch(
            getProductByQuery(
              "category",
              "accessories",
              "accessories",
              "orderedbyname=DES"
            )
          );
        }

        case "CategoriesCoffeeMaker": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee-maker",
              "coffee-maker",
              "orderedbyname=DES"
            )
          );
        }

        case "CategoriesOthers": {
          dispatch(
            getProductByQuery(
              "category",
              "others",
              "others",
              "orderedbyname=DES"
            )
          );
        }
        case "Brands": {
          dispatch(
            getProductByQuery(
              "category",
              "others",
              "others",
              "orderedbyname=DES"
            )
          );
        }
      }
    } else {
      switch (info) {
        case "CategoriesCoffee": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee",
              "coffee",
              "orderedbyname=ASC"
            )
          );
        }

        case "CategoriesAccesories": {
          dispatch(
            getProductByQuery(
              "category",
              "accessories",
              "accessories",
              "orderedbyname=ASC"
            )
          );
        }

        case "CategoriesCoffeeMaker": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee-maker",
              "coffee-maker",
              "orderedbyname=ASC"
            )
          );
        }

        case "CategoriesOthers": {
          dispatch(
            getProductByQuery(
              "category",
              "others",
              "others",
              "orderedbyname=ASC"
            )
          );
        }
      }
    }
  }

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

  function handleOrderStock(e) {
    const value = e.target.value;
    if (value == "DES") {
      switch (info) {
        case "CategoriesCoffee": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee",
              "coffee",
              "orderedbystock=DES",
              ""
            )
          );
        }

        case "CategoriesCoffeeMaker": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee-maker",
              "coffee-maker",
              "orderedbystock=DES",
              ""
            )
          );
        }

        case "CategoriesOthers": {
          dispatch(
            getProductByQuery(
              "category",
              "others",
              "others",
              "orderedbystock=DES",
              ""
            )
          );
        }

        case "CategoriesAccesories": {
          dispatch(
            getProductByQuery(
              "category",
              "accessories",
              "accessories",
              "orderedbystock=DES",
              ""
            )
          );
        }
      }
    } else {
      switch (info) {
        case "CategoriesCoffee": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee",
              "coffee",
              "orderedbystock=ASC"
            )
          );
        }

        case "CategoriesCoffeeMaker": {
          dispatch(
            getProductByQuery(
              "category",
              "coffee-maker",
              "coffee-maker",
              "orderedbystock=ASC",
              ""
            )
          );
        }

        case "CategoriesAccesories": {
          dispatch(
            getProductByQuery(
              "category",
              "accessories",
              "accessories",
              "orderedbystock=ASC"
            )
          );
        }

        case "CategoriesOthers": {
          dispatch(
            getProductByQuery(
              "category",
              "others",
              "others",
              "orderedbystock=ASC",
              ""
            )
          );
        }
      }
    }
  }

  //   function orderStock(e){
  //     if(e.target.value === 'ASC'){
  //       dispatch(coffeeStockAsc())
  //     } else if(e.target.value === 'DSC'){
  //       dispatch(coffeeStockDes())
  //     }
  //   }

  return (
    <div>
      <div className="filters">
        <div className="menuFilters">
          <div>
            <p>Order By Name</p>
            <select onChange={(e) => orderName(e)}>
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
            />

            <input
              type="range"
              min="1"
              max="200"
              value={price.max}
              onChange={(e) => handlePriceMax(e)}
            />
            {
              <span>
                From {price.min} to {price.max} USD
              </span>
            }
          </div>
          {/* <div>
            <select>
              {Brands &&
                Brands.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
          </div> */}
          <div>
            <select onChange={(e) => handleOrderStock(e)}>
              <option value="ASC"> Menos Stock</option>
              <option value="DES"> Mas Stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
