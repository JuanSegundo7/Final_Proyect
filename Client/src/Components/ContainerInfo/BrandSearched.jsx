import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductByQuery, cleanFiltered, matchFavorite, cleanByName } from "../../redux/Actions/Actions"
import { useDispatch, useSelector } from 'react-redux';
import {Card} from "../Card/Card"
import Paginated from "../Paginated/Paginated";
import Filter from "../Filter/Filter";
import Error from "../Card/imgs/error.webp";


const BransSearched = () => {
    window.scrollTo(0,150)
    const {params} = useParams()
    const dispatch = useDispatch();

    const Filtered = useSelector((state) => state.Filtered);
    const FilterBoolean = useSelector((state) => state.Filter);
    const brandProducts = useSelector((state) => state.ProductsBrand);

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(8);

    const indexLastProduct = productPerPage * currentPage;
    const indexFirstProduct = indexLastProduct - productPerPage;

    const filteredOrNot = FilterBoolean
    ? Filtered.slice(indexFirstProduct, indexLastProduct)
    : brandProducts.length > 0 &&
    brandProducts.slice(indexFirstProduct, indexLastProduct); // products

    useEffect(() => {
        dispatch(cleanByName())
        dispatch(getProductByQuery("brand", "brand", params))
    }, [])

    const paginated = (number) => {
        setCurrentPage(number);
    };

    console.log(brandProducts)

    return (
        <div id="Contenido">
      <Paginated
        paginated={paginated}
        productPerPage={productPerPage}
        className="paginated"
        currentPage={currentPage}
        filteredOrNot={Filtered.length}
        products={brandProducts.length}
      />
      <section id="Products">
        <Filter /> {/* info={info} order={order} */}
        <div className="cardHome">
          {filteredOrNot.length ? (
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
            })
          ) : (
            <h1>There is nothing, sorry for that :(</h1>
          )}
        </div>
      </section>
    </div>
    );
}

export default BransSearched;
