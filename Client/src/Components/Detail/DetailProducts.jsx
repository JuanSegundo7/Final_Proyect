import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct, cleanDetail } from "../../redux/Actions/Actions";
import "./Detail.css";

export default function DetailProduct() {
  window.scrollTo(0,0)

  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product);
  const idCoffee = useParams();

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
              <p>Type: {product.grinding_type}</p>
              <p>Brand: {!product.brand ? "There is not name provided" : product.brand.name.toUpperCase() }</p>
              <p>Stock: {product.stock} units</p>
            </article>
        </>
      ) : (
        <h1>Sorry there was an error :(</h1>
      )}
    </article>
  );
}
