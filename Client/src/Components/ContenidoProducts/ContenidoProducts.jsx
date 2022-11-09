import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Actions/Actions";
import CardProduct from "../Card/CardProduct";
import "./ContenidoProducts.css";

export default function ContenidoProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  console.log(allProducts)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div id="Products">
      {allProducts.length &&
        allProducts.map((product) => {
          return (
            <div className="cardProduct" key={product._id}>
              <CardProduct
                _id={product._id}
                name={product.name}
                stock={product.stock}
                description={product.description}
                type={product.type}
                brand={product.brand}
                img={product.image.url}
              />
            </div>
          );
        })}
    </div>
  );
}
