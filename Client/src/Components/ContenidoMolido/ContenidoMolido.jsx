import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export default function ContenidoMolido() {
  const allCoffees = useSelector((state) => state.allCoffees);

  return (
    <div>
      {allCoffees.length ? (
        allCoffees.map((coffee) => {
          return (
            coffee.type.toLowerCase().includes("molienda") && (
              <Card
                img={coffee.image.url}
                key={coffee._id}
                _id={coffee._id}
                name={coffee.name}
                origin={coffee.origin}
                type={coffee.type}
                price={coffee.price}
              />
            )
          );
        })
      ) : (
        <h1>NO HAY NADA PA</h1>
      )}
    </div>
  );
}
