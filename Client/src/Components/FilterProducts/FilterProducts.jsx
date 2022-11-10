import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  coffeeNameAZ,
  coffeeNameZA,
  coffeeStockAsc,
  coffeeStockDes,
  filterCoffeMax,
  filterCoffeMin,
  getCategory,
  getCoffees,
} from "../../redux/Actions/Actions";

export default function () {
  const dispatch = useDispatch();
  //const allCoffees = useSelector((state) => state.allCoffees);
  const allCagetory = useSelector((state) => state.category);

  const [price, setPrice] = useState({
    min: 1,
    max: 1500,
  });

  useEffect(() => {
    dispatch(getCoffees());
    dispatch(getCategory());
  }, [dispatch]);

  function handlePriceMin(e) {
    e.preventDefault();
    setPrice({ ...price, min: e.target.value });
    dispatch(filterCoffeMin(e.target.value, "product"));
  }

  function handlePriceMax(e) {
    e.preventDefault();
    setPrice({ ...price, max: e.target.value });
    dispatch(filterCoffeMax(e.target.value, "product"));
    //-> ver si quiero mandar ya desde aca el array(el estado global de cafes o hacerlo desde el reducer)
  }

  function orderName(e) {
    if (e.target.value === "ASC") {
      dispatch(coffeeNameAZ());
    } else if (e.target.value === "DESC") {
      dispatch(coffeeNameZA());
    }
  }

  function orderStock(e) {
    if (e.target.value === "ASC") {
      dispatch(coffeeStockAsc());
    } else if (e.target.value === "DSC") {
      dispatch(coffeeStockDes());
    }
  }

  return (
    <div>
      <div className="filters">
        <div className="menuFilters">
          <div>
            <p>Order By Name</p>
            <select onChange={(e) => orderName(e)}>
              <option value="ASC"> A-Z </option>
              <option value="DESC">Z-A</option>
            </select>
          </div>
          <div className="filterPrice">
            <input
              type="range"
              min="1"
              max="1500"
              value={price.min}
              onChange={(e) => handlePriceMin(e)}
            />

            <input
              type="range"
              min="1"
              max="1500"
              value={price.max}
              onChange={(e) => handlePriceMax(e)}
            />
            {
              <span>
                From {price.min} to {price.max} USD
              </span>
            }
          </div>
          <div>
            <select>
              {allCagetory &&
                allCagetory.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <select onChange={(e) => orderStock(e)}>
              <option value="ASC"> Menos Stock</option>
              <option value="DSC"> Mas Stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   productNameAZ,
//   productNameZA,
//   filterMax,
//   filterMin,
// } from "../../redux/Actions/Actions";
// import "./FilterProducts.css";

// export default function () {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.allProducts);
//   // const category = useSelector((state) => state.category);
//   const min = useSelector((state) => state.min);
//   const max = useSelector((state) => state.max);

//   // const [input, setInput] = useState({
//   //   min: "",
//   //   max: "",
//   // });

//   const handlerPriceMin = (e) => {
//     e.preventDefault();
//     // setInput({ ...input, [e.target.name]: e.target.value });
//     // dispatch
//     dispatch(filterMin(e.target.value, products));
//   };

//   const handlerPriceMax = (e) => {
//     e.preventDefault();
//     // setInput({ ...input, [e.target.name]: e.target.value });
//     dispatch(filterMax(e.target.value, products));
//   };

//   const handlerOrdered = (e) => {
//     e.preventDefault();
//     e.target.value === "ASC"
//       ? dispatch(productNameAZ(e.target.value))
//       : dispatch(productNameZA(e.target.value));
//   };

//   return (
//     <div id="container">
//       <section id="ProductsP">
//         <div className="filteres">
//           <div className="menuFilteres">
//             <div>
//               <select onChange={(e) => handlerOrdered(e)}>
//                 <option>Order</option>
//                 <option value="ASC"> A-Z </option>
//                 <option value="DESC">Z-A</option>
//               </select>
//             </div>
//             <div className="filterPrice">
//               MIN:
//               <input
//                 name="min"
//                 type="range"
//                 min="1"
//                 max="5000"
//                 // value={min}
//                 onChange={(e) => handlerPriceMin(e)}
//               />
//               MAX:
//               <input
//                 name="max"
//                 type="range"
//                 min="1"
//                 // value={max}
//                 max="5000"
//                 onChange={(e) => handlerPriceMax(e)}
//               />
//               {
//                 <span>
//                   From {min} to {max} USD
//                 </span>
//               }
//             </div>
//             <div>
//               <select>
//                 <option value="all">Category</option>
//                 <option value="all">Category 1</option>
//                 <option value="all">Category 2</option>
//                 <option value="all">Category 3</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
