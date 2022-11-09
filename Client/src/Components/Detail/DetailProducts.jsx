import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, detailProduct } from "../../redux/Actions/Actions";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detailProduct);
  const idProduct = useParams();
  console.log(product, "es product");

  useEffect(() => {
    dispatch(detailProduct(idProduct.id));

    return () => {
      dispatch(cleanDetail()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [dispatch]);

  return (
    <div key={product._id}>
      {/* <img src={product.image && product.image.url}></img> */}
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.type}</p>
      <p>{product.brand}</p>
    </div>
  );
}
