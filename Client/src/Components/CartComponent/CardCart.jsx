import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeAllToCart,
  removeOneToCart,
<<<<<<< HEAD

} from "../../redux/Actions/Actions";

export default function CardCart(props) {

  const dispatch = useDispatch();

  function addOne(e) {
    if (props.stock >= 1) {
       dispatch(addToCart(props._id)); 
=======
  //updateUser
} from "../../redux/Actions/Actions";

export default function CardCart(props) {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.User);
  const cart = useSelector((state) => state.cart);


  function addOne(e) {
    if (props.stock >= 1) {
      dispatch(addToCart(props._id));
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb
    }
  }

  function removeOne(id, all = false) {
    if (all) {
<<<<<<< HEAD
       dispatch(removeOneToCart(id)); 
    } else {
       dispatch(removeAllToCart(id)); 
=======
      dispatch(removeOneToCart(id));
    } else {
      dispatch(removeAllToCart(id));
>>>>>>> 0d90800a5cad77c7eb27bf16f9c4eda881befadb
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
