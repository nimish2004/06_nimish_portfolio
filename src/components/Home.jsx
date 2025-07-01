import React from "react";
import logo from "../assets/logo.png";
import nimi from "../assets/nimish.jpeg";
import "../index.css";

const Home = () => {
  const handleContactClick = () => {
    window.location.href = "#contact";
  };

  return (
    <>
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <div className="left ">
          <h1>Hi, I'm Nimish Berwal </h1>
          <h3>Web developer, Programmer, Designer</h3>
          
          <div className="button-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="button-glow" onClick={handleContactClick}>Contact Me</button>

          </div>
        </div>

        <div className="right">
          <img src={nimi} alt="Nimish" />
        </div>
      </main>
    </>
  );
};

export default Home;
