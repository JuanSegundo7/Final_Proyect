import React from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import {useSelector} from "react-redux"

export default function Home() {

  // hola

  const Coffees = useSelector((state) => state.CategoriesCoffee);
  const CoffeeMaker = useSelector((state) => state.CategoriesCoffeeMaker);
  const Accesories = useSelector((state) => state.CategoriesAccesories);
  const Others = useSelector((state) => state.CategoriesOthers);

  console.log(Coffees)

  return (
    <section id="Home">
      <Carrousel />
      <TigerInfo />
      <ProductCarousel array={Coffees} title="Our Selection Of Coffees"/>
      <ProductCarousel array={CoffeeMaker} title="Our Selection Of Coffee Makers"/>
      <ProductCarousel array={Accesories} title="Accesories"/>
      <ProductCarousel array={Others} title="Others items"/>
    </section>
  );
}
