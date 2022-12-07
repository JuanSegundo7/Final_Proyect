import React, { useEffect } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useState } from "react";


export default function ClickeableStars (props) {

const [rating, setRating] = useState([0,0,0,0,0]);

function onClickHandler (star) {
  
  if (star===1) {
    if (rating[0]===1 && rating[1]!==1)
      setRating([0,0,0,0,0])
    else
      setRating([1,0,0,0,0])
  }

  if (star===2) {
    if (rating[1]===1 && rating[2]!==1)
      setRating([1,0,0,0,0])
    else
      setRating([1,1,0,0,0])
  }

  if (star===3) {
    if (rating[2]===1 && rating[3]!==1)
      setRating([1,1,0,0,0])
    else
      setRating([1,1,1,0,0])
  }

  if (star===4) {
    if (rating[3]===1 && rating[4]!==1)
      setRating([1,1,1,0,0])
    else
      setRating([1,1,1,1,0])
  }

  if (star===5) {
    if (rating[4]===1)
      setRating([1,1,1,1,0])
    else
      setRating([1,1,1,1,1])
  }

}

  useEffect(()=>{
    let totalRating = 0;
    for (let i=0; i<5; i++){
      totalRating = totalRating + rating[i]  
    }
    
    props.setRatingFunction({
      _id: props._id,
      totalRating: totalRating
    })

  },[rating])

  return (
            <div>  
              {rating[0]===1 ? <BsStarFill color="red" cursor="pointer" onClick={()=> onClickHandler(1)}/> : <BsStar color="red" cursor="pointer" onClick={()=> onClickHandler(1)}/>}
              {rating[1]===1 ? <BsStarFill color="red" cursor="pointer" onClick={()=> onClickHandler(2)}/> : <BsStar color="red" cursor="pointer" onClick={()=> onClickHandler(2)}/>}
              {rating[2]===1 ? <BsStarFill color="red" cursor="pointer" onClick={()=> onClickHandler(3)}/> : <BsStar color="red" cursor="pointer" onClick={()=> onClickHandler(3)}/>}
              {rating[3]===1 ? <BsStarFill color="red" cursor="pointer" onClick={()=> onClickHandler(4)}/> : <BsStar color="red" cursor="pointer" onClick={()=> onClickHandler(4)}/>}
              {rating[4]===1 ? <BsStarFill color="red" cursor="pointer" onClick={()=> onClickHandler(5)}/> : <BsStar color="red" cursor="pointer" onClick={()=> onClickHandler(5)}/>}
            </div>            
  );
}
