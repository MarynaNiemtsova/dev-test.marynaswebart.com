import React, { useEffect } from "react";
import "./about.css";
import LAYERS from "../../assets/Layers.svg";
import RIGHT from "../../assets/ArrowRight.svg";

const About = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".animate-on-scroll");

    const handleScroll = () => {
      textElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about">
      <article className="about_text">
        <h3 className="welcome_text animate-on-scroll">
          welcome to the world of wassp multibeam
        </h3>
      </article>

      <div className="container about__container">
        <div className="image">
          <img className="layers animate-on-scroll" src={LAYERS} alt="" />
        </div>

        <div className="about_section">
          <div className="about_header">
            <h6>01</h6>
            <h6 className="big_name animate-on-scroll">ABOUT WASSP</h6>
            <h6 className="small_name animate-on-scroll">ABOUT</h6>
          </div>

          <div className="about__content">
            <article className="about__card animate-on-scroll">
              <p>
                WASSP, a powerful multi-beam sounder with 120-degree coverage
                and models for deep exploration, offers unparalleled accuracy,
                detail, and versatility. Target fish with steerable sounders,
                generate real-time 3D charts, map fish in water, and make better
                decisions with the user-friendly advanced mode.
              </p>
            </article>

            <div className="btn__contact">
              <a href="#features" className="btn animate-on-scroll">
                Our Story
                <img className="right" src={RIGHT} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
