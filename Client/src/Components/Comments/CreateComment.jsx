import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment, updateProduct, getOneProduct } from "../../redux/Actions/Actions";
import { useState } from "react";
import DetailCardComment from "./DetailCardComment";
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
    
    let currentSessionStg = JSON.parse(sessionStorage.getItem("Rating-pf"));
    if (currentSessionStg && Array.isArray(currentSessionStg) && currentSessionStg.length){
      for (let i=0;i<currentSessionStg.length;i++){
        const match = user.cart.find(unElemento => unElemento._id === currentSessionStg[i]._id)
        let acumulado = 0;
        let purchases = 0;
        if (match.hasOwnProperty("total_accumulated")){
          acumulado = match.total_accumulated + currentSessionStg[i].totalRating
        }else{
          acumulado = currentSessionStg[i].totalRating
        }
        if (match.hasOwnProperty("total_purchases")){
          purchases = match.total_purchases + 1
        }else{
          purchases = 1
        }
        
        dispatch(updateProduct(currentSessionStg[i]._id,{total_purchases: purchases, total_accumulated: acumulado}))
      }
    }

    sessionStorage.removeItem("Rating-pf")
    
    if (data)
      dispatch(postComment(data)); 
    navigate("/");
  };

  let ratingArray = [];

  function setRatingFunction (data) {
    let found = null;
    found = ratingArray.findIndex (unElemento => unElemento._id === data._id)
    
    //si existe y tan solo actualizo el valor del rating
    if (found!==-1 && data.totalRating!==0){
        ratingArray[found]={
          _id: data._id,
          totalRating: data.totalRating
        }
    }

    //si existe, y remuevo el elemento del array porque es 0 la calificacion, y eso no cuenta
    if (found!==-1 && data.totalRating===0){
      ratingArray = ratingArray.filter(unElemento => unElemento._id !== data._id)
    }
    
    //no existia y el valor de rating NO es 0
    if (found===-1 && data.totalRating!==0){
      ratingArray.push(data)
    }
    
    //console.log("ratingArray",ratingArray)
    if (ratingArray.length)
      sessionStorage.setItem("Rating-pf", JSON.stringify(ratingArray));
      
  }

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
            <DetailCardComment
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
              setRatingFunction={setRatingFunction}
            />
          );
        })}

      <form onSubmit={(e) => handleOnSubmit(e)}>
        <h3>
          {" "}
          Let us know what you think about our service! We really hope you've found what you were looking for and more...
          {" "}
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