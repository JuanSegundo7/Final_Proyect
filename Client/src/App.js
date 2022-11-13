import React, { useEffect } from "react";
import Switch from "./Components/Switch/Switch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByQuery,
  getProducts,
  getBrands,
  getCategories,
} from "./redux/Actions/Actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const price = useSelector((state) => state.ProductPriceASC);

  console.log(price);

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(getProductByQuery("orderedbyname", "Product", "ASC"));
    // dispatch(getProductByQuery("orderedbyname", "Product", "DES"));
    // dispatch(getProductByQuery("orderedbystock", "StockASC", "ASC"));
    // dispatch(getProductByQuery("orderedbystock", "StockDES", "DES"));
    // dispatch(getProductByQuery("orderedbyprice", "PriceASC", "ASC"));
    // dispatch(getProductByQuery("orderedbyprice", "PriceDES", "DES"));
    dispatch(getProductByQuery("category", "coffee", "coffee"));
    dispatch(getProductByQuery("category", "coffee-maker", "coffee-maker"));
    dispatch(getProductByQuery("category", "accessories", "accessories"));
    dispatch(getProductByQuery("category", "others", "others"));
    dispatch(
      getProductByQuery("category", "coffee", "coffee", "orderedbyname=ASC")
    );
    dispatch(
      getProductByQuery(
        "category",
        "coffee-maker",
        "coffee-maker",
        "orderedbyname=ASC"
      )
    );
    dispatch(
      getProductByQuery(
        "category",
        "accessories",
        "accessories",
        "orderedbyname=ASC"
      )
    );
    dispatch(
      getProductByQuery("category", "others", "others", "orderedbyname=ASC")
    );
    dispatch(getBrands());
    dispatch(getCategories());
    // dispatch(getProductByQuery("brand", "", "hario"));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
