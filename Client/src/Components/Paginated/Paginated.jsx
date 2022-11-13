import React from "react";

export default function Paginated({ paginated, productPerPage, products }) {
  const numberPage = [];

  for (let i = 0; i < Math.ceil(products / productPerPage); i++) {
    numberPage.push(i + 1);
  }

  return (
    <div>
      <nav>
        {numberPage &&
          numberPage.map((number) => {
            return (
              <button key={number} onClick={() => paginated(number)}>
                {number}
              </button>
            );
          })}
      </nav>
    </div>
  );
}
