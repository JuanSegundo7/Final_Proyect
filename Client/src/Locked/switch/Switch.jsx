import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Support from "../Support/Support";

const Switch = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/support" element={<Support />} />
    </Routes>
  );
};

export default Switch;
