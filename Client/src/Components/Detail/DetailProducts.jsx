import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, detailProduct } from "../../redux/Actions/Actions";
import "./Detail.css";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detailProduct);
  const idProduct = useParams();

  useEffect(() => {
    dispatch(detailProduct(idProduct.id));

    return () => {
      dispatch(cleanDetail()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [dispatch]);

  return (
    <div key={product._id} className="containerDetail">
      <div className="imgDiv">
        <img
          src={product.image && product.image.url}
          className="imgDetail"
        ></img>
      </div>
      <div className="text">
        <p>{product.name}</p>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <p>
          <span>{"$ " + product.price}</span>
        </p>
        <p>{"Stock:" + product.stock}</p>
        <p>{product.type}</p>
        <p>{product.brand}</p>
      </div>
    </div>
  );
}
