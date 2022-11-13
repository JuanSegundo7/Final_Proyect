import React from "react";
import "./Paginated.css";

export default function Paginated({
  paginated,
  productPerPage,
  products,
  currentPage,
}) {
  const numberPage = [];
  console.log("es currentPage", numberPage);

  for (let i = 0; i < Math.ceil(products / productPerPage); i++) {
    numberPage.push(i + 1);
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
          <div>
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
