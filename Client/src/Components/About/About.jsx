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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
