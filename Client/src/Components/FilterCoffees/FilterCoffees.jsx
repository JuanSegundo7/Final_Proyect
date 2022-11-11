import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { coffeeNameAZ, coffeeNameZA, coffeeStockAsc, coffeeStockDes, filterCoffeMax, filterCoffeMin, getCategory, getCoffees } from '../../redux/Actions/Actions';

export default function ({value}) {
    const dispatch = useDispatch();
    //const allCoffees = useSelector((state) => state.allCoffees);
    const allCagetory = useSelector((state) => state.category);
    
    const [price, setPrice] = useState({
        min:1,
        max:1500
      })

    // function handlePriceMin(e){
    //     e.preventDefault()
    //     setPrice({...price, min:e.target.value})
    //     dispatch(filterCoffeMin(e.target.value, value))
    //   }
  
    //   function handlePriceMax(e){
    //     e.preventDefault()
    //     setPrice({...price, max:e.target.value})
    //     dispatch(filterCoffeMax(e.target.value, value)) 
    //     //-> ver si quiero mandar ya desde aca el array(el estado global de cafes o hacerlo desde el reducer)
    //   }
  
    //   function orderName(e){
    //     if(e.target.value === 'ASC'){
    //       dispatch(coffeeNameAZ())
    //     } else if(e.target.value === 'DESC'){
    //       dispatch(coffeeNameZA())
    //     }
    //   }
  
    //   function orderStock(e){
    //     if(e.target.value === 'ASC'){
    //       dispatch(coffeeStockAsc())
    //     } else if(e.target.value === 'DSC'){
    //       dispatch(coffeeStockDes())
    //     }
    //   }

  return (
    <div>
         <div className="filters">
          <div className="menuFilters">
            <div>
              <p>Order By Name</p>
              <select onChange={(e) => console.log(e)}>
                <option value='ASC'> A-Z </option>
                <option value='DESC'>Z-A</option>
              </select>
            </div>
            <div className="filterPrice">
              <input 
              type='range'
              min='1'
              max='1500'
              value={price.min}
              onChange={(e) => console.log(e)}
              />

              <input 
              type='range'
              min='1'
              max='1500'
              value={price.max}
              onChange={(e) => console.log(e)}
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

              </select>
            </div>
            <div>
              <select onChange={(e) => console.log(e)}>
                <option value='ASC'> Menos Stock</option>
                <option value='DSC'> Mas Stock</option>
              </select>
            </div>

          </div>
        </div>
    </div>
  )
}
