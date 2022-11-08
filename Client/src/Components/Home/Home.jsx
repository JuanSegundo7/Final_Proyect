import React from "react";
//import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { getCoffees } from "../../redux/Actions/Actions";
import About from "../About/About";
//import { Card } from "../Card/Card";
import Contenido from "../Contenido/Contenido";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Contenido/>
      <About/>
    </>
    );
}
// const dispatch = useDispatch();
// const allCoffees = useSelector((state) => state.allCoffees);
// const about = useSelector((state) => state.about)

// useEffect(() => {
//   dispatch(getCoffees());
// }, [dispatch]);

  {/* {
    !about?
      <section id="Products">
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
      </section>
      :<section id="About">
        <About/>
      </section>
  } */}
  {/* <section id="Products">
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
  </section> */}