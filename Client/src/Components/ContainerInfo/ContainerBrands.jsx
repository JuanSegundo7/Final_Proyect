import React, { useEffect, useState } from "react";
import BrandCard  from "../Card/BrandCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";
import {
  cleanFiltered,
  getProducts,
  matchFavorite,
  cleanByName
} from "../../redux/Actions/Actions";
import Paginated from "../Paginated/Paginated";

export default function ContainerBrands({info}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.Brands); // /coffees = state.CategoriesCoffee

  console.log(allProducts)

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexLastProduct = productPerPage * currentPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  useEffect(() => {
    dispatch(matchFavorite());
  }, [location.pathname]);
 
  let finalArray = allProducts.slice(indexFirstProduct, indexLastProduct); // products

  const paginated = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [dispatch]);

  return (
    <div id="Contenido">
      <Paginated
        paginated={paginated}
        productPerPage={productPerPage}
        className="paginated"
        currentPage={currentPage}
        products={allProducts.length}
      />
      <section id="Products">
        <div className="cardHome">
          {allProducts.length ? (
            finalArray.map((cardCoffe) => {
              return (
                <BrandCard
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
                  brand={info}
                  // stock={cardCoffe.stock}
                />
              );
            })
          ) : (
            <h1>There is nothing, sorry for that :(</h1>
          )}
        </div>
      </section>
    </div>
  );
}
