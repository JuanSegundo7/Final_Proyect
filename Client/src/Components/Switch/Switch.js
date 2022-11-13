import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";
import DetailProducts from "../Detail/DetailProducts";
import ContainerInfo from "../ContainerInfo/ContainerInfo";

const SwitchRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/coffees"
        element={<ContainerInfo info="CategoriesCoffee" />}
      />
      <Route
        exact
        path="/products"
        element={<ContainerInfo info="Products" />}
      />
      <Route
        exact
        path="/products/coffee-maker"
        element={<ContainerInfo info="CategoriesCoffeeMaker" />}
      />
      <Route
        exact
        path="/products/accesories"
        element={<ContainerInfo info="CategoriesAccesories" />}
      />
      <Route
        exact
        path="/products/others"
        element={<ContainerInfo info="CategoriesOthers" />}
      />
      <Route exact path="/brands" element={<ContainerInfo info="Brands" />} />

      <Route exact path="/create" element={<Form />} />
      <Route exact path="/detail/:id" element={<DetailProducts />} />
    </Routes>
  );
};

export default SwitchRouter;
