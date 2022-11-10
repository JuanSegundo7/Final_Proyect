import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Actions/Actions";
import CardProduct from "../Card/CardProduct";
import FilterProducts from "../FilterProducts/FilterProducts";
import "./ContenidoProducts.css";

export default function ContenidoProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <FilterProducts />
      </div>
      <div className="Products">
        {allProducts.length &&
          allProducts.map((product) => {
            return (
              <div className="cardProducts" key={product._id}>
                <CardProduct
                  _id={product._id}
                  name={product.name}
                  // stock={product.stock}
                  type={product.type}
                  brand={product.brand}
                  img={product.image.url}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
