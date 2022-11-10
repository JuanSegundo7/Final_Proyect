import React from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel"
import TigerInfo from "../TigerInfo/TigerInfo"


export default function Home() {
  return (
    <section id="Home">
      <Carrousel />
      <TigerInfo />
    </section>
  );
}
