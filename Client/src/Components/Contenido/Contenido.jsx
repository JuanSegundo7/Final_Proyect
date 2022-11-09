import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCoffees } from "../../redux/Actions/Actions";
import { Card } from "../Card/Card";
import "./Contenido.css";

export default function Contenido() {

    const dispatch = useDispatch();
    const allCoffees = useSelector((state) => state.allCoffees);
    const allCagetory = useSelector((state) => state.category);
  
    const [price, setPrice] = useState({
      min:'1',
      max:'5000'
    })    

    useEffect(() => {
      dispatch(getCoffees());
      dispatch(getCategory())
    }, [dispatch]);

    function handlePriceMin(e){
      e.preventDefault()
      setPrice({...price, min:e.target.value})
    }
    function handlePriceMax(e){
      e.preventDefault()
      setPrice({...price, max:e.target.value})
    }

  return (
    <div id="Contenido">
      <section id="Products">
        <div className="filters">
          <div className="menuFilters">
            <div>
              <select>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
            <div>
              {/* <select>
                <option>Min</option>
                <option>Max</option>
              </select> */}
              <input 
              type='range'
              min='1'
              max='5000'
              onChange={(e) => handlePriceMin(e)}
              />
              <input 
              type='range'
              min='1'
              max='5000'
              onChange={(e) => handlePriceMax(e)}
              />
              {
                <span>From {price.min} to {price.max} USD</span>
              }
            </div>
            <div>
              <select>
                {
                  allCagetory && allCagetory.map((c) => <option key={c.name}>{c.name}</option>)
                }
                {/* <option>Category</option> */}
              </select>
            </div>
            <div>
              <select>
                <option>Mas Vendidos</option>
              </select>
            </div>
          </div>
        </div>

        <div className="cardHome">
          {allCoffees.length &&
            allCoffees.map((cardCoffe) => {
              return (
                <div key={cardCoffe._id}>
                  <Card
                    key={cardCoffe._id}
                    _id={cardCoffe._id}
                    name={cardCoffe.name}
                    origin={cardCoffe.origin}
                    type={cardCoffe.type}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
