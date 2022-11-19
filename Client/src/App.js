import React, { useEffect } from "react";
import Switch from "./Components/Switch/Switch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  getProductByQuery,
  getProducts,
  getBrands,
  getCategories,
  fillAllFavorites,
  findAllCart,
  matchFavorite,
} from "./redux/Actions/Actions";
import Dashboard from "./Dashboard/Dashboard"
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const FavCopy = useSelector((state) => state.FavoritesCopy);

  if (FavCopy === 0) dispatch(getProducts()).then(() => dispatch(matchFavorite()));


  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductByQuery("category", "coffee", "coffee"));
    dispatch(getProductByQuery("category", "coffee-maker", "coffee-maker"));
    dispatch(getProductByQuery("category", "accessories", "accessories"));
    dispatch(getProductByQuery("category", "others", "others"));
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(fillAllFavorites());
    dispatch(findAllCart())
  }, [dispatch]);

  const { user, isAuthenticated } = useAuth0();

  const datosEnMiBD = useSelector((state) => state.User);

  if (datosEnMiBD.admin == true) {
    sessionStorage.setItem("user", JSON.stringify(user));

    return (
      <Dashboard />
    );
  }

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
