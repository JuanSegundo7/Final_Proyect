import { getProductByQuery } from "../../redux/Actions/Actions";
import { useDispatch } from "react-redux";

export function orderName(e) {
  const dispatch = useDispatch();
  console.log(e, "esntro?");
  const value = e.target.value;
  if (value == "DES") {
    switch (info) {
      case "CategoriesCoffee": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee",
            "coffee",
            "orderedbyname=DES",
            ""
          )
        );
      }

      case "CategoriesAccesories": {
        dispatch(
          getProductByQuery(
            "category",
            "accessories",
            "accessories",
            "orderedbyname=DES"
          )
        );
      }

      case "CategoriesCoffeeMaker": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee-maker",
            "coffee-maker",
            "orderedbyname=DES"
          )
        );
      }

      case "CategoriesOthers": {
        dispatch(
          getProductByQuery("category", "others", "others", "orderedbyname=DES")
        );
      }
      case "Brands": {
        dispatch(
          getProductByQuery("category", "others", "others", "orderedbyname=DES")
        );
      }
    }
  } else {
    switch (info) {
      case "CategoriesCoffee": {
        dispatch(
          getProductByQuery("category", "coffee", "coffee", "orderedbyname=ASC")
        );
      }

      case "CategoriesAccesories": {
        dispatch(
          getProductByQuery(
            "category",
            "accessories",
            "accessories",
            "orderedbyname=ASC"
          )
        );
      }

      case "CategoriesCoffeeMaker": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee-maker",
            "coffee-maker",
            "orderedbyname=ASC"
          )
        );
      }

      case "CategoriesOthers": {
        dispatch(
          getProductByQuery("category", "others", "others", "orderedbyname=ASC")
        );
      }
    }
  }
}

export function handleOrderStock(e) {
  const value = e.target.value;
  if (value == "DES") {
    switch (info) {
      case "CategoriesCoffee": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee",
            "coffee",
            "orderedbystock=DES"
          )
        );
      }

      case "CategoriesCoffeeMaker": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee-maker",
            "coffee-maker",
            "orderedbystock=DES",
            ""
          )
        );
      }

      case "CategoriesOthers": {
        dispatch(
          getProductByQuery(
            "category",
            "others",
            "others",
            "orderedbystock=DES",
            ""
          )
        );
      }

      case "CategoriesAccesories": {
        dispatch(
          getProductByQuery(
            "category",
            "accessories",
            "accessories",
            "orderedbystock=DES",
            ""
          )
        );
      }
    }
  } else {
    switch (info) {
      case "CategoriesCoffee": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee",
            "coffee",
            "orderedbystock=ASC"
          )
        );
      }

      case "CategoriesCoffeeMaker": {
        dispatch(
          getProductByQuery(
            "category",
            "coffee-maker",
            "coffee-maker",
            "orderedbystock=ASC",
            ""
          )
        );
      }

      case "CategoriesAccesories": {
        dispatch(
          getProductByQuery(
            "category",
            "accessories",
            "accessories",
            "orderedbystock=ASC"
          )
        );
      }

      case "CategoriesOthers": {
        dispatch(
          getProductByQuery(
            "category",
            "others",
            "others",
            "orderedbystock=ASC",
            ""
          )
        );
      }
    }
  }
}
