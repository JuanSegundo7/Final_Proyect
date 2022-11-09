import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Form from "../Form/Form";
import Home from "../Home/Home";
import DetailCoffee from "../Detail/DetailCoffee";

const SwitchRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/create" element={<Form />} />
      <Route exact path="/coffee/:id" element={<DetailCoffee />} />
    </Routes>
  );
};

export default SwitchRouter;
