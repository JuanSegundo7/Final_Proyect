import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCoffees } from "../../redux/Actions/Actions";

export default function DetailCoffee() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailCoffee);
  const idCoffee = useParams();

  useEffect(() => {
    dispatch(detailCoffees(idCoffee.id));
  }, [dispatch]);

  return (
    <div>
      <p>{detail.name}</p>
      <p>{detail.description}</p>
      <p>{detail.category}</p>
      <p>{detail.type}</p>
      <p>{detail.origin}</p>
      <p>{detail.stock}</p>
    </div>
  );
}
