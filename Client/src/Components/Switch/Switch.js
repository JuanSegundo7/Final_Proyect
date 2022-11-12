import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";
import DetailCoffee from "../Detail/DetailCoffee";
import DetailProducts from "../Detail/DetailProducts";
import ContainerInfo from "../ContainerInfo/ContainerInfo";
import { getProductByQuery, getProducts } from "../../redux/Actions/Actions";

const SwitchRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/coffees"
        element={
          <ContainerInfo info="CategoriesCoffee" effect={getProductByQuery} />
        }
      />
      <Route
        exact
        path="/products"
        element={<ContainerInfo info="Products" effect={getProductByQuery} />}
      />
      <Route
        exact
        path="/products/coffee-maker"
        element={
          <ContainerInfo
            info="CategoriesCoffeeMaker"
            effect={getProductByQuery}
          />
        }
      />
      <Route
        exact
        path="/products/accesories"
        element={
          <ContainerInfo info="CategoriesAccesories" effect={getProducts} />
        }
      />
      <Route
        exact
        path="/brands"
        element={<ContainerInfo info="Brands" effect={getProducts} />}
      />
      <Route exact path="/create" element={<Form />} />
      <Route path="/coffees/:id" element={<DetailCoffee />} />
      <Route path="/products/:id" element={<DetailProducts />} />
    </Routes>
  );
};

export default SwitchRouter;
