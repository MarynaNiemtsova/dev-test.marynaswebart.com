import React from "react";
import "./series.css";
import METER from "../../assets/Meter.svg";

const Series = () => {
  return (
    <section id="series">
      <div className="container">
        <div className="fishing_content">
          <div className="fishing_goods">
            <span>01</span>
            <span>03</span>
            <div className="fishing_meter">
              <img src={METER} alt="" />
            </div>
          </div>
          <div className="fishing_series">
            <h5>(FISHING SERIES)</h5>
          </div>
          <div className="f_series">
            <h2>F - SERIES</h2>
          </div>
        </div>
        <div className="fishing_text">
          <h4>F - SERIES</h4>
          <p>
            WASSP Multibeam finds fish and habitat over a wider area than
            single-beam systems.
          </p>
          <a href="#home">Explore Now</a>
        </div>
      </div>
    </section>
  );
};

export default Series;
