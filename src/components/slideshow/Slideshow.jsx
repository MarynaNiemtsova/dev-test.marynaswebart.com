import React from "react";
import "./slideshow.css";
import IMG3 from "../../assets/Hemisphere.svg";
import IMG1 from "../../assets/SbgSystems.svg";
import IMG2 from "../../assets/Seabots.svg";

const Slideshow = () => {
  return (
    <section id="slideshow">
      <div className="container slideshow_images">
        <div className=" cont_images ">
          <img className="img1" src={IMG3} alt="" />
          <h3>HEMISPHERE</h3>
          <img className="img2" src={IMG1} alt="" />
          <h3>SBG SYSTEMS</h3>
          <img className="img3" src={IMG2} alt="" />
          <h3>GPA SEABOTS</h3>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
