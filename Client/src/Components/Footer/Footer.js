import React from 'react';
import "./Footer.css"
import logo from "../Header/img/coffee.png"

const Footer = () => {
    return (
        <footer id="Footer">
            <img id="logo-footer" src={logo} />
            <h1>Tiger Coffee</h1>
        </footer>
    );
}

export default Footer;
