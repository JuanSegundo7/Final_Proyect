import React, { useEffect } from "react";
import "./Favorite.css";
import { matchFavorite,addOneFavorite,updateUser} from "../../redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Favorite({ id }) {
  const dispatch = useDispatch();
  const allFavorites = useSelector((state) => state.Favorites);
  const User = useSelector((state) => state.User);
  const { isAuthenticated } = useAuth0();

  const handleFavorite = () => {
    dispatch(addOneFavorite(id));
    dispatch(matchFavorite());
    //console.log("estoy favoritenado")
    //tal vez aca deberia escribir ademas en la bbdd solo si estoy logueado y cada vez que hago click
  };

  //Update my database everytime I click on a new item
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(updateUser(User._id, {favorites: allFavorites}));
    }
  }, [allFavorites]);

  useEffect(() => {
    if (allFavorites.length /* && !isAuthenticated */) {
      console.log("allFavorites:",allFavorites)
      localStorage.setItem("Favorites-pf", allFavorites);
    }
  }, [allFavorites]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleFavorite}
      id={
        (allFavorites !== null ? allFavorites.includes(id) : null)
          ? "starClicked"
          : "dogStar"
      }
      viewBox="0 0 512 512"
    >
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </svg>
  );
}
