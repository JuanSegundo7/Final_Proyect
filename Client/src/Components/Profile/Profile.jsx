import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login_button from "../Login/Logout-button/Logout-button";
import Error from "../Card/imgs/error.webp";
import "./Profile.css";
import { useSelector } from "react-redux";


const Profile = () => {
  window.scrollTo(0, 42);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const datosEnMiBD = useSelector((state) => state.User);

  //console.log(datosEnMiBD)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <section>
        <div id="Profile">
          <img
            src={datosEnMiBD.hasOwnProperty("_id") ? datosEnMiBD.picture : user.picture}
            alt={datosEnMiBD.hasOwnProperty("_id") ? datosEnMiBD.name : user.name}
            id="image-profile"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Error;
            }}
          />
          <div id="Profile-rigth">
            <h2>{datosEnMiBD.hasOwnProperty("_id") ? (datosEnMiBD.name===datosEnMiBD.lastname? datosEnMiBD.name : datosEnMiBD.name + " " + datosEnMiBD.lastname) : user.name}</h2>
            <p>{datosEnMiBD.hasOwnProperty("_id") ? datosEnMiBD._id : user.email}</p>
            <Login_button />
          </div>
        </div>
      </section>
    )
  );
};

export default Profile;
