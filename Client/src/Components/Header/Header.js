import React, { useState } from "react";
import logo from "./img/coffee.png";
import Categories from "../Categories/Categories";
import { Link as Navigator } from "react-router-dom";
import "./Header.css";
import Login from "../Login/Login";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [state, setState] = useState();
  const allCart = useSelector((state) => state.cart);
  const Favorites = useSelector((state) => state.Favorites);

  const { user, isAuthenticated } = useAuth0();

  let login;

  if (state > 0) login = <Login close={setState} />;

  return (
    <header>
      <div id="ship">
        <p>
          <span>Free shipping</span>to all the country from 50 USD
        </p>
      </div>
      <nav className="nav">
        <figure>
          <Navigator to="/">
            <img src={logo} alt="logo" />
          </Navigator>
        </figure>
        <SearchBar />
        <div id="flex-svgs">
          <Navigator to={isAuthenticated ? "/profile" : "/login"}>
            {!isAuthenticated ? (
              <div className="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            ) : (
              <img id="user-img" src={user.picture} />
            )}
          </Navigator>
          <Navigator to="cart">
            <div className="svg-container">
              <p>{allCart.length}</p> {/* agregarle estilos */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="cart"
                className="svg"
                viewBox="0 0 576 512"
              >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
            </div>
          </Navigator>
          <Navigator to="/favorites">
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
                id="cart"
                viewBox="0 0 512 512"
              >
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
            </div>
          </Navigator>
          <div className="number">
            <picture className="number">{Favorites.length}</picture>
          </div>
        </div>
      </nav>
      <Categories />
      {login}
    </header>
  );
};

export default Header;
