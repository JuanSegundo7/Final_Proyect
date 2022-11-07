import React from 'react';
import './Header.css';
import logo from '../../imagen/img portfolio.png'
import { SlUserFemale } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="Header">
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
