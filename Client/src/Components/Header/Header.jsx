import React from 'react';
import './Header.css';
import logo from '../../imagen/img portfolio.png'
import { SlUserFemale } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="Header">
            <video id="back-video" src="https://res.cloudinary.com/dk4pvvl2b/video/upload/v1667484907/Granos_De_Caf%C3%83_-_88934_xedaw3.mp4" autoPlay playsInline loop muted/>
            <nav className='nav-top'>
                <p><span id='span'>Envíos Gratis </span> a todo el país en compras mayores a 
                <span id='span'> $5000</span></p>
            </nav>
            <nav className='nav'>
                <img src={logo} alt="logo"/>
                {/* <Link to='create'> */}
                    <SlUserFemale className='icono'/> 
                {/* </Link> */}
            </nav>
        </header>
    );
}

export default Header;
