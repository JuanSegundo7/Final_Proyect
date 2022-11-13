import React from "react";
import "./Paginated.css";

export default function Paginated({ paginated, productPerPage, products }) {
  const numberPage = [];

  for (let i = 0; i < Math.ceil(products / productPerPage); i++) {
    numberPage.push(i + 1);
  }

  return (
    <div className="containerPag">
      <nav>
        {numberPage &&
          numberPage.map((number) => {
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
  );
}
