import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffees } from "../../redux/Actions/Actions";
import { Card } from "../Card/Card";
import Form from "../Form/Form";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCoffees = useSelector((state) => state.allCoffees);

  useEffect(() => {
    dispatch(getCoffees());
  }, [dispatch]);

  return (

    <div>
      <Form />
      <div className="cardHome">
        {allCoffees.length &&
          allCoffees.map((cardCoffe) => {
            return (
              <div key={cardCoffe._id}>
                <Card
                  key={cardCoffe._id}
                  _id={cardCoffe._id}
                  name={cardCoffe.name}
                  // category={cardCoffe.category}
                  // description={cardCoffe.description}
                  origin={cardCoffe.origin}
                  // stock={cardCoffe.stock}
                  type={cardCoffe.type}
                />
              </div>
            );
          })}
      </div>
    </div>
  );

}