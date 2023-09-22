import React from "react";
import "./footer.css";
import RIGHT from "../../assets/ArrowRight.svg";
import IMG from "../../assets/WasspMultibeam.svg";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className=" container footer_style">
        <div className="footer_contact">
          <div className="footer_text">
            <h4>
              Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna
              in id.
            </h4>
          </div>
          <div className="btn_footer">
            <a href="#contact" className="btn">
              Contact
              <img className="right" src={RIGHT} alt="" />
            </a>
          </div>
          <div className="footer_news">
            <a href="#home">Subscribe to our newsletter</a>
          </div>
        </div>

        <div className="footer_section">
          <ul className="permalinks">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#series">Products</a>
            </li>
            <li>
              <a href="#about">About ENL</a>
            </li>
            <li>
              <a href="#features">Multibeam Technology</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#features">Resources</a>
            </li>
            <li>
              <a href="#features">Contact</a>
            </li>
          </ul>

          <ul className="permalinks2">
            <li>
              <a href="#home">Offices</a>
            </li>
            <li>
              <a href="#products">Auckland - NZ</a>
            </li>
            <li>
              <a href="#about">AEssex - UK</a>
            </li>
          </ul>
          <ul className="social_links">
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              ></a>
              Instagram
            </li>
            <li>
              {" "}
              <a
                href="https://www.youtube.com/ß"
                rel="noreferrer"
                target="_blank"
              >
                Youtube
              </a>
            </li>
          </ul>
          <div className="footer__copyright">
            <small>&copy; 2023WASSP</small>
          </div>
        </div>
      </div>
      <div className="gradient-footer"></div>
      <div>
        <img className="img_footer" src={IMG} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
