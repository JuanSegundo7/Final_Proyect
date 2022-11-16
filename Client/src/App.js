import React, { useEffect } from "react";
import Switch from "./Components/Switch/Switch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getProductByQuery,
  getProducts,
  getBrands,
  getCategories,
} from "./redux/Actions/Actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductByQuery("category", "coffee", "coffee"));
    dispatch(getProductByQuery("category", "coffee-maker", "coffee-maker"));
    dispatch(getProductByQuery("category", "accessories", "accessories"));
    dispatch(getProductByQuery("category", "others", "others"));
    dispatch(getBrands());
    dispatch(getCategories());
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
