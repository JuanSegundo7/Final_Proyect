import React, { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import { Card } from "../Card/Card";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";
import {
  cleanFiltered,
  getProducts,
  matchFavorite,
  updateUser,
} from "../../redux/Actions/Actions";
import Paginated from "../Paginated/Paginated";
import { useAuth0 } from "@auth0/auth0-react";

export default function ContainerInfo({ info, order }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state[info]); // /coffees = state.CategoriesCoffee
  const Filtered = useSelector((state) => state.Filtered);
  const FilterBoolean = useSelector((state) => state.Filter);
  const updateFilter = useSelector((state) => state.updateFilter);
  const UpdateFavorite = useSelector((state) => state.UpdateFavorite);
  const User = useSelector((state) => state.User);
  const { isAuthenticated } = useAuth0();

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexLastProduct = productPerPage * currentPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  window.scrollTo(0, 40);

  useEffect(() => {
    dispatch(cleanFiltered());
    dispatch(matchFavorite());
  }, [location.pathname]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(updateUser(User._id, { favorites: [] }));
    }
  }, [UpdateFavorite]);

  const filteredOrNot = FilterBoolean
    ? Filtered.slice(indexFirstProduct, indexLastProduct)
    : allProducts.length > 0 &&
      allProducts.slice(indexFirstProduct, indexLastProduct); // products

  const paginated = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [dispatch, updateFilter, Filtered]);

  return (
    <div id="Contenido">
      <Paginated
        paginated={paginated}
        productPerPage={productPerPage}
        className="paginated"
        currentPage={currentPage}
        filteredOrNot={Filtered.length}
        products={allProducts.length}
      />
      <section id="Products">
        <Filter info={info} order={order} />
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
                  brand={info}
                  // stock={cardCoffe.stock}
                />
              );
            })
          ) : (
            <h1>You haven't selected any favorites so far</h1>
          )}
        </div>
      </section>
    </div>
  );
}
