import React from 'react';
import "./Navbar.css"
import logo from "../../Components/Header/img/coffee.png"
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const {user, logout, isAuthenticated} = useAuth0()

    return (
        <nav id="dashboard-nav">
            <img src={logo}/>
            <h1><span>Tiger Coffee</span> - Dashboard</h1>
            {isAuthenticated && user? <img id="user-img" src={user.picture} onClick={() => logout({ returnTo: window.location.origin })} /> : null} 
        </nav>
    );
}

export default Navbar;
