import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login_button from "../Login/Logout-button/Logout-button"
import Error from "../Card/imgs/error.webp"
import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <section>
      <div id="Profile">
        <img src={user.picture} alt={user.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src = Error;}}/>
        <div id="Profile-rigth">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Login_button />
        </div>
      </div>
      
      </section>
    )
  );
};

export default Profile;