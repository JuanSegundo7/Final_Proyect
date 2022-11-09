import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Form from "../Form/Form";
import Home from "../Home/Home";
import DetailCoffee from "../Detail/DetailCoffee";
import DetailProducts from "../Detail/DetailProducts";

const SwitchRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/create" element={<Form />} />
      <Route exact path="/coffee/:id" element={<DetailCoffee />} />
      <Route exact path="/products/:id" element={<DetailProducts />} />
    </Routes>
  );
};

export default SwitchRouter;
