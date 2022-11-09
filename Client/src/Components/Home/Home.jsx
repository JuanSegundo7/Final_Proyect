import React from "react";
import Contenido from "../Contenido/Contenido";
import ContenidoProducts from "../ContenidoProducts/ContenidoProducts";
import Detail from "../Detail/DetailCoffee";
import About from "../About/About";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Contenido />
      <ContenidoProducts />
      <About />
    </>
  );
}
