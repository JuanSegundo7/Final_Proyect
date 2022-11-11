import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCoffees } from "../../redux/Actions/Actions";
import { Card } from "../Card/Card";
import FilterCoffees from "../FilterCoffees/FilterCoffees";
import "./Contenido.css";

export default function ContenidoCoffes() {
  const dispatch = useDispatch();
  const allCoffees = useSelector((state) => state.allCoffees);

  useEffect(() => {
    // dispatch(getCoffees());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div id="Contenido">
      <section id="Products">
        <FilterCoffees value="coffee" />

        <div className="cardHome">
          {allCoffees.length &&
            allCoffees.map((cardCoffe) => {
              return (
                <Card
                  img={cardCoffe.image.url}
                  key={cardCoffe._id}
                  _id={cardCoffe._id}
                  name={cardCoffe.name}
                  origin={cardCoffe.origin}
                  type={cardCoffe.type}
                  price={cardCoffe.price}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}
