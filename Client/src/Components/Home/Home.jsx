import React, { useEffect } from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import TigerInfo from "../TigerInfo/TigerInfo";
import { useDispatch, useSelector } from "react-redux";
import { getProductByQuery } from "../../redux/Actions/Actions";

export default function Home() {

  const ASC = useSelector((state) => state.ProductPriceASC)
  const DES = useSelector((state) => state.ProductPriceDES)

  console.log(ASC, "ASC")
  console.log(DES, "DES")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductByQuery("orderedbyname","Product","ASC"))
    dispatch(getProductByQuery("orderedbyname","Product","DES"))
    dispatch(getProductByQuery("orderedbystock","Stock","ASC"))
    dispatch(getProductByQuery("orderedbystock","Stock","DES"))
    dispatch(getProductByQuery("orderedbyprice","Price","ASC"))
    dispatch(getProductByQuery("orderedbyprice","Price","DES"))
    dispatch(getProductByQuery("orderedbyname","ASC"))
    dispatch(getProductByQuery("orderedbyname","ASC"))
  }, [dispatch])
  
  return (
    <section id="Home">
      <Carrousel />
      <TigerInfo />
    </section>
  );
}
