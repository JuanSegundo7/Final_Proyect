import React from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import {useSelector} from "react-redux"
import Help from "../Help/Help"

export default function Home() {

  const Coffees = useSelector((state) => state.CategoriesCoffee);
  const CoffeeMaker = useSelector((state) => state.CategoriesCoffeeMaker);
  const Accesories = useSelector((state) => state.CategoriesAccesories);
  const Others = useSelector((state) => state.CategoriesOthers);

  return (
    <section id="Home">
      <Carrousel />
      <ProductCarousel array={Coffees} title="Our Selection Of Coffees"/>
      <ProductCarousel array={CoffeeMaker} title="Our Selection Of Coffee Makers"/>
      <TigerInfo />
      <ProductCarousel array={Accesories} title="Accessories"/>
      <ProductCarousel array={Others} title="Other items"/>
      <Help />
    </section>
  );
}
