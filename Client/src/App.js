import React, { useEffect } from "react";
import Switch from "./Components/Switch/Switch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByQuery, getProducts, getBrands } from "./redux/Actions/Actions";

import "./App.css";

function App() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductByQuery("orderedbyname", "Product", "ASC"));
    dispatch(getProductByQuery("orderedbyname", "Product", "DES"));
    dispatch(getProductByQuery("orderedbystock", "Stock", "ASC"));
    dispatch(getProductByQuery("orderedbystock", "Stock", "DES"));
    dispatch(getProductByQuery("orderedbyprice", "Price", "ASC"));
    dispatch(getProductByQuery("orderedbyprice", "Price", "DES"));
    dispatch(getProductByQuery("category", "", "coffee"));
    dispatch(getProductByQuery("category", "", "coffee-maker"));
    dispatch(getProductByQuery("category", "", "accessories"));
    dispatch(getProductByQuery("category", "", "others"));
    dispatch(getBrands());
    // dispatch(getProductByQuery("brand", "", ""));
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
