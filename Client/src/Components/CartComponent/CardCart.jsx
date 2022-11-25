import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import //addToCart,
//removeAllToCart,
//removeOneToCart,
//updateUser,
// "../../redux/Actions/Actions";

export default function CardCart(props) {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  //console.log(props.stock)
  const user = useSelector((state) => state.User);
  //const cart = useSelector((state) => state.cart);

  /* useEffect(() => {
    if (isAuthenticated) {
      const userToBeUpdate = {
        cart: cart,
      };
      dispatch(updateUser(user._id, userToBeUpdate));
    } else {
      console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
  }, [cart]); */

  function addOne(e) {
    if (props.stock >= 1) {
      /* dispatch(addToCart(props._id)); */
    }
  }

  function removeOne(id, all = false) {
    if (all) {
      /* dispatch(removeOneToCart(id)); */
    } else {
      /* dispatch(removeAllToCart(id)); */
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
