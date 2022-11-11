import React from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffees, getProducts } from "../../redux/Actions/Actions";

export default function Home() {
  return (
    <section id="Home">
      <Carrousel />
      <TigerInfo />
    </section>
  );
}
