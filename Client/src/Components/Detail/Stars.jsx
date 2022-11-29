import React from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export default function Stars({ average }) {
  let parteEntera = Math.trunc(average);
  let parteDecimal = 0;
  if (parteEntera > 0) {
    parteDecimal = average % parteEntera;
  } else {
    parteDecimal = average % 1;
  }

  const starArray = [0, 0, 0, 0, 0];

  for (let i = 0; i < parteEntera; i++) {
    starArray[i] = 1;
  }

  if (parteEntera < 5) {
    if (parteDecimal >= 0.5) starArray[parteEntera] = 0.5;
    else starArray[parteEntera] = 0;
  }

  // console.log("starArray",starArray)

  return (
    <>
      {starArray.map((unaEstrella) =>
        unaEstrella === 1 ? (
          <BsStarFill color="red" />
        ) : unaEstrella === 0.5 ? (
          <BsStarHalf color="red" />
        ) : (
          <BsStar color="red" />
        )
      )}
    </>
  );
}
