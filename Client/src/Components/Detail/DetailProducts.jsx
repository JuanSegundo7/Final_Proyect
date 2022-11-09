import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../redux/Actions/Actions";

export default function DetailProduct() {
  const dispatch = useDispatch();
  let product = useSelector((state) => state.detailProduct);
  const idProduct = useParams();

  useEffect(() => {
    dispatch(detailProduct(idProduct.id));
  }, [dispatch]);

  if (Array.isArray(product)) {
    // el detalle de los productos me venia en un array
    product = product.find((e) => {
      return e;
    });
  }

  return (
    <div key={product._id}>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.type}</p>
      <p>{product.brand}</p>
    </div>
  );
}
