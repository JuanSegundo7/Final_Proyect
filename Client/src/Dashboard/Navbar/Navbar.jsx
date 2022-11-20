import React from 'react';
import "./Navbar.css"
import logo from "../../Components/Header/img/coffee.png"
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const {user, logout} = useAuth0()

    return (
        <nav id="dashboard-nav">
            <img src={logo}/>
            {/* <img id="user-img" src={user.picture} />  */}
        </nav>
    );
}

export default Navbar;
