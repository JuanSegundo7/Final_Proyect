import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useLocation, useParams } from "react-router-dom";
import SwitchRouter from "../Switch/Switch";
import { useEffect } from "react";
import { getProducts } from "../../redux/Actions/Actions";

export default function ContenidoGrain() {
  const { params } = useParams();
  const allCoffee = useSelector((state) => state.allCoffees);
  const allProducts = useSelector((state) => state.allProducts);

  const all = [...allCoffee, ...allProducts];

  const final = all.filter((value) => value.category.name === params);
  //CHICOS, ACA LES CAMBIE UN ERROR QUE TENIAN, ESTABAN ACCEDIENDO MAL A LA INFO
  //value.type.toLowerCase() === params
  return (
    <div>
      {final.length ? (
        final.map((coffee) => {
          return (
            <Card
              img={coffee.image.url}
              key={coffee._id}
              _id={coffee._id}
              name={coffee.name}
              origin={coffee.origin}
              type={coffee.type}
              price={coffee.price}
            />
          );
        })
      ) : (
        <h1>NO HAY NADA PA</h1>
      )}
    </div>
  );
}
