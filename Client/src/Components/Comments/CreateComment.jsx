import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/Actions/Actions";
import { useState } from "react";
import DetailComment from "./DetailCardComment";
import { useNavigate } from "react-router-dom";
import "./Comments.css";

export default function CreateComments() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  let precioTotal = 0;
  let total = 0;

  for (let i = 0; i < user.cart.length; i++) {
    total = user.cart[i].price * user.cart[i].quantity;

    if (total > 0) precioTotal = total + precioTotal;
  }
  const handleOnChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      content: input,
      user,
    };
    // console.log(data,"soydata");
    dispatch(postComment(data));
    navigate("/");
  };
  return (
    <div id="Cart">
      <div id="nav-cart">
        <h1>Purchase Detail</h1>
        <h1>
          <span id="total-price">
            {precioTotal >= 500 ? "Total with shipping" : "Total"}
          </span>
          {""}: ${precioTotal}
        </h1>
      </div>
      {user.cart &&
        user.cart.map((product) => {
          // console.log(product);
          return (
            <DetailComment
              img={
                !product.image || product.image === null
                  ? Error
                  : product.image.url
              }
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          );
        })}

      <form onSubmit={(e) => handleOnSubmit(e)}>
        <h3>
          {" "}
          Let us know what you thought of the page's service, if you found what
          you were looking for and more...{" "}
        </h3>
        <div>
          <textarea onChange={(e) => handleOnChange(e)} id="textArea-comment" />
        </div>
        <button type="submit" id="button-send">
          Ok
        </button>
      </form>
    </div>
  );
}
