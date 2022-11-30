import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
//import Image1 from "./Locked.jpg";
import "./Locked.css";

const Locked = () => {
  const { logout } = useAuth0();

  const logoutHandle = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      <div id="Locked">
        <button id="button-contact">Contact support</button>
        <button id="button-logout" onClick={logoutHandle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Locked;
