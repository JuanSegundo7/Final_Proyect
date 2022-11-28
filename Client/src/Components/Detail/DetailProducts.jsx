import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOneProduct,
  cleanDetail,
  addToCart,
} from "../../redux/Actions/Actions";
import AddCart from "../Alert/AddProduct"
import "./Detail.css";

export default function DetailProduct() {
  window.scrollTo(0, 250);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product);
  const idCoffee = useParams();

  const handleAddToCart = (e) => {
    AddCart()
    dispatch(addToCart(idCoffee.id));
  };

  useEffect(() => {
    dispatch(getOneProduct(idCoffee.id));

    return () => {
      dispatch(cleanDetail()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [dispatch]);

  return (
    <article id="containerDetail">
      {Object.keys(product).length ? (
        <>
          <img src={product.image && product.image.url} className="imgDetail" />
          <article id="detail_flex_info">
            <h2>{product.name.toUpperCase()}</h2>
            <p>Price: US${product.price}</p>
            <p>{product.description}</p>
            <p>
              Type:{" "}
              {product.grinding_type ? (
                product.grinding_type
              ) : (
                <p>There is note type available</p>
              )}
            </p>
            <p>
              Brand:{" "}
              {!product.brand
                ? "There is not name provided"
                : product.brand.name.toUpperCase()}
            </p>
            <p>
              Average Rating:{" "}
              {(!product.total_accumulated || !product.total_purchases || !product.total_purchases>0)
                ? "This product has not been rated yet"
                : product.total_accumulated / product.total_purchases}
            </p>
            <p>Stock: {product.stock} units</p>
            <button
              type="submit"
              id="button-cart"
              className="button"
              onClick={handleAddToCart}
            >
              ADD TO CART{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
            </button>
          </article>
        </>
      ) : (
        <h1>Sorry there was an error :(</h1>
      )}
    </article>
  );
}
