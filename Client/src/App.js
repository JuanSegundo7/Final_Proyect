import React, { useEffect } from "react";
import About from "./Components/About/About";
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
  getUsers,
  getComments,
  getOneUser,
} from "./redux/Actions/Actions";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const FavCopy = useSelector((state) => state.FavoritesCopy);
  const allCart = useSelector((state) => state.cart);
  const { user } = useAuth0();

  if (FavCopy === 0)
    dispatch(getProducts()).then(() => dispatch(matchFavorite()));

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductByQuery("category", "coffee", "coffee"));
    dispatch(getProductByQuery("category", "coffee-maker", "coffee-maker"));
    dispatch(getProductByQuery("category", "accessories", "accessories"));
    dispatch(getProductByQuery("category", "others", "others"));
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getComments());
    dispatch(fillAllFavorites());
    dispatch(findAllCart());
    dispatch(getUsers());
    if (user) dispatch(getOneUser(user.email));
  }, [dispatch]);

  useEffect(() => {
    if (allCart.length) {
      localStorage.setItem("Cart-pf", JSON.stringify(allCart));
    }
  }, [allCart]);

  const datosEnMiBD = useSelector((state) => state.User);
  if (datosEnMiBD.admin == true) {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  }

  if (window.location.pathname == "/about") {
    return (
      <main>
        <About />
      </main>
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
