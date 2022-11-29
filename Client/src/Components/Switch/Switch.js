import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../ProductForm/ProductForm";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import DetailProducts from "../Detail/DetailProducts";
import ContainerInfo from "../ContainerInfo/ContainerInfo";
import ContainerBrands from "../ContainerInfo/ContainerBrands";
import BrandSearched from "../ContainerInfo/BrandSearched";
import CartComponent from "../CartComponent/CartComponent";
import Login from "../Login/Login";
import About from "../About/About";
import Page404 from "../Page404/Page404";
import CreateComments from "../Comments/CreateComment";


const SwitchRouter = () => {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/coffees"
        element={<ContainerInfo info="CategoriesCoffee" order="coffee" />}
      />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/search" element={<ContainerInfo info="ByName" />} />
      <Route
        exact
        path="/products/coffee-maker"
        element={
          <ContainerInfo info="CategoriesCoffeeMaker" order="coffee-maker" />
        }
      />
      <Route
        exact
        path="/products/accesories"
        element={
          <ContainerInfo info="CategoriesAccesories" order="accessories" />
        }
      />
      {/* <Route
        exact
        path="/dashboard"
        element={
          <ContainerInfo info="CategoriesAccesories" order="accessories" />
        }
      /> */}
      <Route
        exact
        path="/products/others"
        element={<ContainerInfo info="CategoriesOthers" order="others" />}
      />
      <Route exact path="/brands" element={<ContainerBrands />} />
      <Route
        exact
        path="/brands/:params"
        element={<BrandSearched info={"ProductsBrand"} />}
      />
      <Route exact path="/create" element={<Form />} />

      <Route exact path="/detail/:id" element={<DetailProducts />} />

      <Route
        exact
        path="/favorites"
        element={<ContainerInfo info="FavoritesCopy" />}
      />

      <Route exact path="/cart" element={<CartComponent />} />
      <Route exact path="*" element={<Page404 />} />
      <Route exact path="/comments" element={<CreateComments/>} />

    </Routes>
  );
};

export default SwitchRouter;
