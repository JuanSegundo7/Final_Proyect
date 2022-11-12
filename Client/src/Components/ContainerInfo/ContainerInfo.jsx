import React, { useEffect } from "react";
import FilterCoffees from "../FilterCoffees/FilterCoffees";
import { Card } from "../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import Error from "../Card/imgs/error.webp";
import "./ContainerInfo.css";

export default function ContainerInfo({ info, effect }) {
  const dispatch = useDispatch();
  const allCoffees = useSelector((state) => state[info]);

  useEffect(() => {
    dispatch(effect());
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
                  img={
                    !cardCoffe.image || cardCoffe.image === null
                      ? Error
                      : cardCoffe.image.url
                  }
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
