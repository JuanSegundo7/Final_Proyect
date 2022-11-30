import React from "react";
import "./About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Header/img/coffee.png";
import { data } from "./data.js";

export default function About() {
  return (
    <div id="About">
      <div className="header">
        <div className="title">ABOUT US</div>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <p>
          We are Henry graduates who, in the final project instance, decided to
          start an e-commerce because most of us liked coffee. It was a very nice
          stage in where we had to learn how to work as a team and overcome different
          conflicts, both personal and regarding the project itself. 
          Regarding this project, we decided to use the following technologies: 
          React, Redux, Mongoose/MongoDb, Javascript, Express, Css
          and several libraries such as Auth0, MercadoPago, Nodemailer, Material UI among others.
        </p>
      </div>
      <section className="cards">
        {data.map((user) => {
          return (
            <div className="containerInfo">
              <img src={user.img} alt="profile" />
              <h2>{user.name}</h2>
              <h3>Full Stack Developer</h3>
              <div className="logos">
                <a href={user.linkedin} id="icono" className="svg-container">
                  <LinkedInIcon id="contenedor" />
                </a>
                <a href={user.github} id="icono" className="svg-container">
                  <GitHubIcon id="contenedor" />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
