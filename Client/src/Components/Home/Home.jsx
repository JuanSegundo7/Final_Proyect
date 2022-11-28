import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import Carousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Help from "../Help/Help";
import {
  clearCart,
  updateUser,
  sendEmail,
  updateProduct,
  getProducts,
} from "../../redux/Actions/Actions";
import CommentsCarousel from "../Comments/Comments";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function Home() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const Coffees = useSelector((state) => state.CategoriesCoffee);
  const CoffeeMaker = useSelector((state) => state.CategoriesCoffeeMaker);
  const Accesories = useSelector((state) => state.CategoriesAccesories);
  const Others = useSelector((state) => state.CategoriesOthers);
  const updateFilter = useSelector((state) => state.updateFilter);
  const Comments = useSelector((state) => state.Comments);
  const User = useSelector((state) => state.User);
  const Products = useSelector((state) => state.Products);
  const { user } = useAuth0();

  useEffect(() => {
    if (user && search.includes("approved") && User) {
      dispatch(getProducts());
      const array = [];

      Products.forEach((product) => {
        User.cart.find((productInCart) => {
          if (product._id === productInCart._id) {
            const allData = {};
            allData.stock = product.stock - productInCart.quantity;
            allData._id = product._id;
            array.push(allData);
          }
        });
      });
      array.forEach((element) =>
        dispatch(updateProduct(element._id, { stock: element.stock }))
      );

      localStorage.removeItem("Cart-pf");
      dispatch(clearCart());
      dispatch(updateUser(User._id, { cart: [] }));
      Swal.fire({
        title:"Purchase Success!",
        text:'Please check you email for further details!',
        icon:'success',
        timer: 2000
      });
      const email_data = {
        email: User._id,
        name: User.name + " " + User.lastname,
        cart: User.cart,
      };
      dispatch(sendEmail(email_data));
      navigate("/comments");
    }

    if (user && search.includes("rejected") && User) {
      Swal.fire({
        title:"Purchase Error!",
        text:'There was an error with your purchase',
        icon:'error',
        timer: 2000
      });
      const email_data = {
        email: User._id,
        name: User.name + " " + User.lastname,
        error:"error with the purchase"
      };
      dispatch(sendEmail(email_data));
    }
    
  }, [updateFilter]);

  return (
    <section id="Home">
      <Carousel />
      <ProductCarousel array={Coffees} title="Our Selection Of Coffees" />
      <ProductCarousel
        array={CoffeeMaker}
        title="Our Selection Of Coffee Makers"
      />
      <TigerInfo />
      <ProductCarousel array={Accesories} title="Accessories" />
      <CommentsCarousel array={Comments} title="Comments" />
      <ProductCarousel array={Others} title="Other items" />
      <Help />
    </section>
  );
}
