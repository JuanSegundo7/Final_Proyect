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
              {/* <button
                type="submit"
                id="button-cart"
                className={disabled ? "button-disabled" : "button"}
                onClick={handleAddToCart}
              >
                ADD TO CART{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                </svg>
              </button> */}
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
  </>) : (<h1>Sorry there was an error :( </h1>)}
  </section>)
}

