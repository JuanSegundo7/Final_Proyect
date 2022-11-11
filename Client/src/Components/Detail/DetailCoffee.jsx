import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, detailCoffees } from "../../redux/Actions/Actions";

export default function DetailCoffee() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailCoffee);
  const idCoffee = useParams();

  useEffect(() => {
    dispatch(detailCoffees(idCoffee.id));

    return () => {
      dispatch(cleanDetail()); // para que se limpie el estado de detalle cuando lo saco y caundo aprete otro se ponga el nuevo y no qeude ese dilay del anterior
    };
  }, [dispatch]);

  return (
    <div>
      <img
        src={detail.image && detail.image.url}
        alt={`image coffe: ${detail.name}`}
      ></img>
      <p>{detail.name}</p>
      <p>{detail.description}</p>
      <p>{detail.category && detail.category.name}</p>
      <p>{detail.type}</p>
      <p>{detail.origin}</p>
      <p>{detail.stock}</p>
    </div>
  );
}
