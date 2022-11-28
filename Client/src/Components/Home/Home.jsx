import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import Help from "../Help/Help";
import { clearCart, updateUser } from "../../redux/Actions/Actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const Coffees = useSelector((state) => state.CategoriesCoffee);
  const CoffeeMaker = useSelector((state) => state.CategoriesCoffeeMaker);
  const Accesories = useSelector((state) => state.CategoriesAccesories);
  const Others = useSelector((state) => state.CategoriesOthers);
  const updateFilter = useSelector((state) => state.updateFilter);
  const User = useSelector((state) => state.User);
  const { user } = useAuth0();

  /* 
  cada vez que aumento la cantidad en el carrito tengo que bajar la cantidad de stock
  en el producto, pero... una vez que se complete la compra. Es decir que cuando la 
  compra salio bien deberia hacer la cuenta para restar el stock que tiene products con lo que 
  habia en el carrito 
  */

  useEffect(() => {
    if (user && search.includes("approved")) {
      localStorage.removeItem("Cart-pf");
      dispatch(clearCart());
      dispatch(updateUser(User._id, { cart: [] }));
      navigate("/");
    }
  }, [updateFilter]);

  return (
    <section id="Home">
      <Carrousel />
      <ProductCarousel array={Coffees} title="Our Selection Of Coffees" />
      <ProductCarousel
        array={CoffeeMaker}
        title="Our Selection Of Coffee Makers"
      />
      <TigerInfo />
      <ProductCarousel array={Accesories} title="Accessories" />
      <ProductCarousel array={Others} title="Other items" />
      <Help />
    </section>
  );
}
