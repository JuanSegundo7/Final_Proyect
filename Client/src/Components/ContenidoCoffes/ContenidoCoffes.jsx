import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeNameAZ, coffeeNameZA, coffeeStockAsc, coffeeStockDes, getCategory, getCoffees } from "../../redux/Actions/Actions";
import { Card } from "../Card/Card";
import "./Contenido.css";

export default function ContenidoCoffes() {

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

    function orderName(e){
      if(e.target.value === 'ASC'){
        dispatch(coffeeNameAZ())
      } else if(e.target.value === 'DESC'){
        dispatch(coffeeNameZA())
      }
    }

    function orderStock(e){
      if(e.target.value === 'ASC'){
        dispatch(coffeeStockAsc())
      } else if(e.target.value === 'DSC'){
        dispatch(coffeeStockDes())
      }
    }

  return (
    <div id="Contenido">
      <section id="Products">
        <div className="filters">
          <div className="menuFilters">
            <div>
              <p>Order By Name</p>
              <select onChange={(e) => orderName(e)}>
                {/* <option disabled>Order By Name</option> */}
                <option value='ASC'> A-Z </option>
                <option value='DESC'>Z-A</option>
              </select>
            </div>
            <div className="filterPrice">
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
              <select onChange={(e) => orderStock(e)}>
                <option value='ASC'> Menos Stock</option>
                <option value='DSC'> Mas Stock</option>
              </select>
            </div>
            {/* <div>
              <select>
                <option>Mas Vendidos</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="cardHome">
          {allCoffees.length &&
            allCoffees.map((cardCoffe) => {
              return (
                <div key={cardCoffe._id}>
                  <Card
                    img={cardCoffe.image.url}
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
