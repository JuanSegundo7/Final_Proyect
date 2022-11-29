import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFiltered } from "../../redux/Actions/Actions";
import "./Paginated.css";

export default function Paginated({
  paginated,
  productPerPage,
  products,
  currentPage,
  filteredOrNot,
}) {
  const numberPage = [];
  const filterState = useSelector((state) => state.Filter);
  window.scrollTo(0, 150);

  if (filterState) {
    for (let i = 0; i < Math.ceil(filteredOrNot / productPerPage); i++) {
      numberPage.push(i + 1);
    }
  } else {
    for (let i = 0; i < Math.ceil(products / productPerPage); i++) {
      numberPage.push(i + 1);
    }
  }

  const numOfPage = (number) => {
    if (currentPage === number) {
      return true;
    }
    return false;
  };

  return (
    <div className="containerPag">
      <nav className="containerNav">
        {numberPage?.map((number) => (
          <div key={number.toString()}>
            {numOfPage(number) ? (
              <button id="buttonPag" onClick={() => paginated(number)}>
                {number}
              </button>
            ) : (
              <button id="buttonPag2" onClick={() => paginated(number)}>
                {number}
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

{
  /* (
    <div className="containerPag">
      <nav>
        {numOfPage &&
          numOfPage.map((number) => {
            return (
              <button
                key={number}
                onClick={() => paginated(number)}
                id="buttonPag"
              >
                {number}
              </button>
            );
          })}
      </nav>
    </div>
  ); */
}
