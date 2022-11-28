import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Help from "../Help/Help";
import { clearCart, updateUser, sendEmail, /* getOneUser, */ } from "../../redux/Actions/Actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const dispatch = useDispatch();
  const { search, state, pathname } = useLocation();
  const navigate = useNavigate();
  const Coffees = useSelector((state) => state.CategoriesCoffee);
  const CoffeeMaker = useSelector((state) => state.CategoriesCoffeeMaker);
  const Accesories = useSelector((state) => state.CategoriesAccesories);
  const Others = useSelector((state) => state.CategoriesOthers);
  const updateFilter = useSelector((state) => state.updateFilter);
  const User = useSelector((state) => state.User);
  const { user } = useAuth0();
  //console.log("link que devuelve mercadopago...tiene status=???:",search)

  /* if (User){
    console.log(User)
  } */

  useEffect(() => {
    if (user && search.includes("approved") && User) {
      localStorage.removeItem("Cart-pf");
      dispatch(clearCart());
      dispatch(updateUser(User._id, { cart: [] }));
      const email_data = {
        email:User._id, 
        name:User.name + " " + User.lastname,
        cart:User.cart
      };
      dispatch(sendEmail(email_data));
      navigate("/");
    }
  }, [search, updateFilter]);

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
