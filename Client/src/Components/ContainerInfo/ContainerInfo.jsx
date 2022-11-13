import React, { useEffect } from "react";
import FilterCoffees from "../FilterCoffees/FilterCoffees";
import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";
import { getProductByQuery } from "../../redux/Actions/Actions";

export default function ContainerInfo({ info, effect }) {
  const { name } = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state[info]);
  console.log(allProducts, "estpoe es allProducts");

  // PROTOTIPO CON PARAMS, LO MEJOR SERIA BUSCAR LA FORMA DE CONSEGUIR LA INFO DEL BACK POR MARCA

  // const paramsArray = allProducts.filter((product) => {
  //   return product.brand.name === name;
  // });

  // console.log(paramsArray, "estp es paramsArray");

  // console.log(name, "estoe s paramas");

  // useEffect(() => {
  //   dispatch(getProductByQuery());
  // }, [dispatch]);

  return (
    <div id="Contenido">
      <section id="Products">
        <FilterCoffees value="coffee" />
        <div className="cardHome">
          {allProducts.length &&
            allProducts.map((cardCoffe) => {
              return (
                <Card
                  img={
                    !cardCoffe.image || cardCoffe.image === null
                      ? Error
                      : cardCoffe.image.url
                  }
                  img2={cardCoffe.image && cardCoffe.image}
                  key={cardCoffe._id}
                  _id={cardCoffe._id}
                  name={cardCoffe.name}
                  origin={cardCoffe.origin}
                  type={cardCoffe.type}
                  price={cardCoffe.price}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}
