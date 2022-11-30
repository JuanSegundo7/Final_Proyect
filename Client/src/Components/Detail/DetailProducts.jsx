import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RandomizerDetail from "../Functions/RandomizerDetail"
import { useParams } from "react-router-dom";
import {
  getOneProduct,
  cleanDetail,
  /* addToCart, */
} from "../../redux/Actions/Actions";
import Stars from "../Detail/Stars";
import "./Detail.css";
import {Card} from "../Card/CardForDetail"
import CartButton from "../Cart/CartButton";
import Loader from "../Loader/Loader";

export default function DetailProduct() {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product);
  const Products = useSelector((state) => state.Products);
  let array

  console.log(product)

  if(Products) array = RandomizerDetail(product._id, Products)

  console.log(array);

  const idCoffee = useParams();

  // const handleAddToCart = (e) => {
  //   AddCart();
  //   dispatch(addToCart(idCoffee.id));
  // };

  useEffect(() => {
    dispatch(getOneProduct(idCoffee.id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch]);

  return (
    <section id="containerDetail">
      {Object.keys(product).length ? (
        <>
          <article id="container-row">
            <img
              src={product.image && product.image.url}
              className="imgDetail"
            />
            <article id="detail_flex_info">
              <h2>{product.name.toUpperCase()}</h2>
              <p>Price: US${product.price}</p>
              <p>
                {!product.total_accumulated ||
                !product.total_purchases ||
                !product.total_purchases > 0 ? (
                  "This product has not been rated yet "
                ) : (
                  <p>
                    <Stars
                      average={
                        product.total_accumulated / product.total_purchases
                      }
                    />{" "}
                    ({product.total_purchases})
                  </p>
                )}
              </p>
              <CartButton id={idCoffee.id} />
            </article>
          </article>
          <article id="Description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </article>
          <article id="characteristics">
            <h2>Characteristics</h2>
            <div id="flex-characteristics">
              <div className="div-info">
                <p className="left-info background-1">Brand</p>
                <p className="right-info">{!product.brand ? "There is not name provided": product.brand.name.toUpperCase()}</p>
              </div>
              <div className="div-info">
                <p className="left-info background-2">Type</p>
                <p className="right-info">{product.grinding_type ? (product.grinding_type.toUpperCase()) : (<p>There is note type available</p>)}</p>
              </div>
              <div className="div-info">
                <p className="left-info background-1">Stock</p>
                <p className="right-info"> {product.stock} units</p>
              </div>
          </div>
          </article>
          <article id="OtherProducts">
            <h1>Other Products you may be interested</h1>
            <article id="flex-detail-products"> 
            {array[0] !== undefined ? array.map((cardCoffe) => {
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
                )}) : <h1>There is nothing</h1>}
              </article>
            </article>
  </>) : (<Loader/>)}
  </section>)
}

