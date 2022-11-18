import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeAllToCart, removeOneToCart } from '../../redux/Actions/Actions';

export default function CardCart(props) {

    const dispatch = useDispatch();

    function addOne(e){
        dispatch(addToCart(props._id))
    }

    function removeOne(id, all=false){
     if(all){
        dispatch(removeOneToCart(id)) 
     } else {
        dispatch(removeAllToCart(id))
     }
    }

  return (
    <div>
      <div id="card">
          <img
            src={!props.img && props.img2 ? props.img2 : props.img}alt="img not found"className="imgCard"/>

        <p id="name">
          {props.name ? props.name.toUpperCase() : "There is not name provided"}
        </p>
        {props.origin ? <p id="origin">{props.origin}</p> : null}
        <p id="price">US$ {props.price}</p>
        <p>Monto a pagar: {props.price * props.quantity}</p>
        <button onClick={(e) => removeOne(props._id, true)}>-</button>
        <p>{props.quantity}</p>
        <button onClick={(e) => addOne(e)}>+</button>
        <button onClick={(e) => removeOne(props._id, false)}>Borrar todos</button>
      </div>
    </div>
  )
}
