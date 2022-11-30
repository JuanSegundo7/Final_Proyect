import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
// import Image1 from "../img/Locked.jpg";
import "../Locked.css";

const Home = () => {
  const { logout } = useAuth0();

  const logoutHandle = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      <div id="Locked">
        <Link to="/support">
          <button id="button-contact">Contact support</button>
        </Link>
        <button id="button-logout" onClick={logoutHandle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
