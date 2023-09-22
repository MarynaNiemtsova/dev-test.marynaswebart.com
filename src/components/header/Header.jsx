import React from "react";
import "./header.css";
import LOGO from "../../assets/Logo.svg";
import DOWN from "../../assets/ArrowDown.svg";
import MENU from "../../assets/Menu.svg";
import RIGHT from "../../assets/ArrowRight.svg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="menu_header">
          <div className="logo">
            <img src={LOGO} alt="" />
          </div>
          <div className="menu_button">
            <a
              href="#text-buttons"
              className="btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              SERCH
            </a>
            <a
              href="#text-buttons"
              className="btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              LOGIN
            </a>
            <a
              href="#text-buttons"
              className="btn-primary btn_en"
              rel="noreferrer"
              target="_blank"
            >
              EN
            </a>
            <img className="down" src={DOWN} alt="" />

            <img className="menu" src={MENU} alt="" />
          </div>
        </div>
        <div className="header__maine">
          <article className="header">
            <h1 className="title_header">SEA IT ALL</h1>
            <h1 className="text">MULTIBEAM SONAR PRODUCTS & SOLUTIONS.</h1>
          </article>
          <div className="article_button">
            <article className="header1">
              <p>
                WASSP multi-beam enables<br></br> sustainable fishing,<br></br>{" "}
                exploration, and surveys with<br></br> versatility and detail.
              </p>
            </article>

            <div className="btn_header">
              <a href="#contact" className="btn">
                Contact us
                <img className="right" src={RIGHT} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
