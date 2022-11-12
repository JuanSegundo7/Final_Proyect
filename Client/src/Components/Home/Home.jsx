import React, { useEffect } from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProductByQuery, getProducts } from "../../redux/Actions/Actions";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getProductByQuery("orderedbyname","Product","ASC"))
    dispatch(getProductByQuery("orderedbyname","Product","DES"))
    dispatch(getProductByQuery("orderedbystock","Stock","ASC"))
    dispatch(getProductByQuery("orderedbystock","Stock","DES"))
    dispatch(getProductByQuery("orderedbyprice","Price","ASC"))
    dispatch(getProductByQuery("orderedbyprice","Price","DES"))
    dispatch(getProductByQuery("category","","coffee"))
    dispatch(getProductByQuery("category","","coffee-maker"))
    dispatch(getProductByQuery("category","","accessories"))
    dispatch(getProductByQuery("category","","others"))
  }, [dispatch])
  
  return (
    <section id="Home">
      <Carrousel />
      <TigerInfo />
    </section>
  );
}
