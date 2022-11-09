import React from "react";
import logo from "./img/coffee.png";
import { Link } from "react-scroll";
import Dropdown from "../Dropdown/Dropdown";
import { Link as Navigator } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
    const allCagetory = useSelector((state) => state.category);

    const Categories = {array: allCagetory, name: "Categories"}


  const Coffee = {
    array: [
      { id: 1, name: "Black" },
      { id: 2, name: "Lungo" },
      { id: 2, name: "Expresso" },
    ],
    name: "Coffe",
  };
  
  const Product ={
    array: [],
    name:'Product'
  }

    return (
        <header>
            <div id="ship">
                <p><span>Free shipping</span>to all the country from 50 USD</p>
            </div>
            <nav className="nav">
                <figure>
                <Navigator to='/'>
                    <img src={logo} alt="logo" />
                </Navigator>
                </figure>
                <form>
                    <input id="search" autoComplete="off" type="text"></input>
                    <button id="search-button">
                        <svg id="search-icon" className="search-icon" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>
                </form>
                <div id="flex-svgs">
                    <Navigator to='/create'>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    </div>
                    </Navigator>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" id="cart" className="svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" /></svg>
                    </div>
                </div>
            </nav>
            <nav id="Categorys">
                <ul id="Categorys">
                    <li><Dropdown info={Categories}/></li>
                    <li><Dropdown info={Coffee}/></li>
                    <li><Dropdown info={Coffee}/></li>
                    <li><Dropdown info={Product}/></li>
                    <li><Dropdown info={Product}/></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
