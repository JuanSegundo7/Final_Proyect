import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCoffees } from "../../redux/Actions/Actions";

export default function DetailCoffee() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailCoffee);
  const idCoffee = useParams();
  console.log(detail, "es detail");

  useEffect(() => {
    dispatch(detailCoffees(idCoffee.id));
  }, [dispatch]);

  return (
    <div>
      <img src={detail.image.url} alt={`image coffe: ${detail.name}`}></img>
      <p>{detail.name}</p>
      <p>{detail.description}</p>
      <p>{detail.category.name}</p>
      <p>{detail.type}</p>
      <p>{detail.origin}</p>
      <p>{detail.stock}</p>
    </div>
  );
}
