import React, { useEffect } from "react";
import FilterCoffees from "../FilterCoffees/FilterCoffees";
import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";
import { cleanByName, getProductByQuery } from "../../redux/Actions/Actions";
import { useState } from "react";
import Paginated from "../Paginated/Paginated";

export default function ContainerInfo({ info }) {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const allProducts = useSelector((state) => state[info]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexLastProduct = productPerPage * currentPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  const ByName = useSelector((state) => state.ByName);
  const allCoffees = useSelector((state) => state.CategoriesCoffee);
  console.log(allCoffees, "es allcofee");

  const products = !ByName.length
    ? allProducts.slice(indexFirstProduct, indexLastProduct)
    : ByName.slice(indexFirstProduct, indexLastProduct);

  const paginated = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    setCurrentPage(1);
    return () => {
      dispatch(cleanByName()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [allProducts, dispatch]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(cleanByName()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
  //   };
  // }, [dispatch]);

  return (
    <div id="Contenido">
      <Paginated
        paginated={paginated}
        productPerPage={productPerPage}
        products={allProducts.length}
        className="paginated"
        currentPage={currentPage}
      />
      <section id="Products">
        <FilterCoffees value="coffee" />
        <div className="cardHome">
          {products.length &&
            products.map((cardCoffe) => {
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
                  type={cardCoffe.grinding_type}
                  price={cardCoffe.price}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}
