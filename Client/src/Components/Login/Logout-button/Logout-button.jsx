import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

const logoutChangeHandler = (event) => {
  //console.log("me desloguee")
  localStorage.removeItem("Favorites-pf");
  localStorage.removeItem("Cart-pf");
  //localStorage.clear();
  logout({ returnTo: window.location.origin })
}

  return (
    <button onClick={logoutChangeHandler}>
      Log Out
    </button>
  );
};

export default LogoutButton;