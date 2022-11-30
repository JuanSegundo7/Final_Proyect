import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOneProduct,
  cleanDetail,
  /* addToCart, */
} from "../../redux/Actions/Actions";
import Stars from "../Detail/Stars";
import "./Detail.css";
import CartButton from "../Cart/CartButton";
import Loader from "../Loader/Loader";

export default function DetailProduct() {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product);
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
    <article id="containerDetail">
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
          <article>
            <h2>Description</h2>
            <p>{product.description}</p>
          </article>
          <article id="characteristics">
            <h2>Characteristics</h2>
            <div>
              <p>
                Brand:{" "}
                {!product.brand
                  ? "There is not name provided"
                  : product.brand.name.toUpperCase()}
              </p>
              <p>
                Type:{" "}
                {product.grinding_type ? (
                  product.grinding_type.toUpperCase()
                ) : (
                  <p>There is note type available</p>
                )}
              </p>
              <p>Stock: {product.stock} units</p>
            </div>
          </article>
        </>
      ) : <Loader/>}
    </article>
  );
}
