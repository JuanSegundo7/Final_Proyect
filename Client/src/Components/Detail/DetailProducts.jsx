import React from "react";
import { coffe } from "./dbHarcodeado";

export default function Detail(props) {
  console.log(coffe, " es coffe harcodeado");
  return (
    <div>
      <p>{coffe.name}</p>
      <p>{coffe.description}</p>
      <p>{coffe.category}</p>
      <p>{coffe.type}</p>
      <p>{coffe.origin}</p>
      <p>{coffe.stock}</p>
    </div>
  );
}
