import React, { useEffect } from "react";
import Filter from "../Filter/Filter";
import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";
import { getProductByQuery } from "../../redux/Actions/Actions";
import { useState } from "react";
import Paginated from "../Paginated/Paginated";

export default function ContainerInfo({ info }) {
  const allProducts = useSelector((state) => state[info]); 
  const Filtered = useSelector((state) => state.Filtered); 
  const FilterBoolean = useSelector((state) => state.Filter); 
  const updateFilter = useSelector((state) => state.updateFilter); 

  
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexLastProduct = productPerPage * currentPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  
  const products = allProducts.slice(indexFirstProduct, indexLastProduct);
  
  const filteredOrNot = FilterBoolean ? Filtered.slice(indexFirstProduct, indexLastProduct) : products;
    
  const paginated = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredOrNot, updateFilter]);

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
        <Filter info={info} />
        <div className="cardHome">
          {filteredOrNot.length ?
            filteredOrNot.map((cardCoffe) => {
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
            }) : <h1>Hola</h1>}
        </div>
      </section>
    </div>
  );
}
