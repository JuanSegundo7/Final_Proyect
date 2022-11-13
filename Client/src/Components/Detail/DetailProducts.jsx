import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct, cleanDetail } from "../../redux/Actions/Actions";
import "./Detail.css";

export default function DetailProduct() {
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
            <p>{product.name}</p>
            <p>
              <span>{"$ " + product.price}</span>
            </p>
            <p>{"Stock:" + product.stock}</p>
            <p>{product.description}</p>
            <p>{product.grinding_type}</p>
            <p>{!product.brand ? "There is not name provided" : product.brand.name }</p>
            <p>{product.category.name}</p>
        </>
      ) : (
        <h1>Sorry there was an error :(</h1>
      )}
    </article>
  );
}
