import React from "react";
import "./news.css";
import IMG1 from "../../assets/03.jpg";
import IMG2 from "../../assets/04.jpg";
import IMG3 from "../../assets/05.jpg";
import IMG4 from "../../assets/06.jpg";
import IMG5 from "../../assets/07.jpg";
import IMG6 from "../../assets/08.jpg";
import IMG7 from "../../assets/09.jpg";
import IMG8 from "../../assets/10.jpg";
import IMG9 from "../../assets/11.jpg";
import IMG10 from "../../assets/12.jpg";
import IMG11 from "../../assets/13.jpg";
import IMG12 from "../../assets/14.jpg";
import ARROW from "../../assets/ArrowRight.svg";

const News = () => {
  return (
    <section id="news">
      <div className="container">
        <div className="news_section">
          <div className="news_header">
            <h6>05</h6>
            <h6>LATEST NEWS</h6>
          </div>
          <div className="big_images">
            <div className="big_box">
              <img className="img1" src={IMG1} alt="" />
              <div className="gradient_news "></div>
              <h6>
                South Pacific reopens for superyachts, a top charter spot.
              </h6>
              <h5>View</h5>
              <img className="arrow" src={ARROW} alt="" />
            </div>
            <div className="big_box">
              <img className="img1" src={IMG2} alt="" />
              <div className="gradient_news "></div>
              <h6>WASSP’s Bluebeam brings major feature advancements.</h6>
              <h5>View</h5>
              <img className="arrow" src={ARROW} alt="" />
            </div>
          </div>
        </div>
        <div className="gradient"></div>
        <div className="small_images">
          <img className="img2" src={IMG3} alt="" />
          <img className="img2" src={IMG4} alt="" />
          <img className="img2" src={IMG5} alt="" />
          <img className="img2" src={IMG6} alt="" />
          <img className="img2" src={IMG7} alt="" />
          <img className="img2" src={IMG8} alt="" />
          <img className="img2" src={IMG9} alt="" />
          <img className="img2" src={IMG10} alt="" />
          <img className="img2" src={IMG11} alt="" />
          <img className="img2" src={IMG12} alt="" />
        </div>
      </div>
    </section>
  );
};

export default News;
