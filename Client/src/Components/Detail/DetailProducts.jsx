import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../redux/Actions/Actions";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detailProduct);
  const idProduct = useParams();
  console.log(product, "es product");

  useEffect(() => {
    dispatch(detailProduct(idProduct.id));
  }, [dispatch]);

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
