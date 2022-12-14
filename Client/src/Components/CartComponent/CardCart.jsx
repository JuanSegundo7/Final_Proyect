import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeAllToCart, removeOneToCart, updateUser } from "../../redux/Actions/Actions";

export default function CardCart(props) {
  const dispatch = useDispatch();

  const UserDb = useSelector((state) => state.User);
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.Products);
  const findProduct = products.find((product) => product._id === props._id);

  function addOne(e) {
    if (findProduct.stock !== props.quantity && props.stock > 1) {
      dispatch(addToCart(props._id));
    }
  }

  function removeOne(id, all = false) {
    if (all) {
      dispatch(removeOneToCart(id));
      dispatch(updateUser(UserDb._id, { cart: [] }));
    } else {
      dispatch(removeAllToCart(id));
      if (cart && cart.length === 1)
        dispatch(updateUser(UserDb._id, { cart: [] }));
    }
  }

  return (
    <div>
      <div id="Card-cart">
        <div className="flex-card-info">
          <img
            src={!props.img && props.img2 ? props.img2 : props.img}
            alt="img not found"
            className="imgCard"
          />
          <p id="name">
            {props.name
              ? props.name.toUpperCase()
              : "There is not name provided"}
          </p>
          {props.origin ? (
            <p id="origin">{props.origin}</p>
          ) : (
            <p id="origin">There is not origin provided</p>
          )}
          <div id="flex-stock-buttons">
            <div className="flex-card-info" id="cart-buttons">
              <button onClick={() => removeOne(props._id, true)}>-</button>
              <p>{props.quantity}</p>
              <button onClick={(e) => addOne(e)}>+</button>
            </div>
            <p id="card-stock">{props.stock} available</p>
          </div>
          <p id="cart-card-price">${props.price * props.quantity}</p>
        </div>
        <div id="eliminate-div">
          <p onClick={() => removeOne(props._id, false)}>Eliminate</p>
        </div>
      </div>
    </div>
  );
}
