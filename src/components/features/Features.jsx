import React, { useState } from "react";
import "./features.css";
import LAYERS2 from "../../assets/Layers2.svg";

const data = [
  {
    id: 1,
    number: "01",
    title: "High Resolution Chirp Sounder",
    text: "The High Resolution Chirp Sounder is an advanced sonar system known for its exceptional underwater mapping capabilities, using a rapidly varying frequency chirp signal for unparalleled resolution and depth penetration.",
  },
  {
    id: 2,
    number: "02",
    title: "120° side to side coverage ",
    text: "The system offers an impressive 120° side-to-side coverage, ensuring comprehensive and wide-ranging data capture across its field of operation. ",
  },
  {
    id: 3,
    number: "03",
    title: "Realtime CDX Mapping",
    text: "Realtime CDX Mapping involves creating live, constantly updating maps using Continuous Data Exchange (CDX) technology. This approach delivers real-time, accurate maps for applications like navigation, emergency response, and logistics.",
  },
  {
    id: 4,
    number: "04",
    title: "Realtime 3D View CDX",
    text: "Realtime 3D View CDX leverages Continuous Data Exchange (CDX) technology for live, interactive 3D visualizations. It is a game-changer for applications like urban planning, gaming, and architectural design. ",
  },
  {
    id: 5,
    number: "05",
    title: "Backscatter license",
    text: "A backscatter license typically grants permission or legal rights related to the use of backscatter technology, which is commonly employed in various fields like imaging, radar, and underwater surveying for signal reflection and data collection. ",
  },
  {
    id: 6,
    number: "06",
    title: "1.High Resolution Side Scan",
    text: "High-Res Side Scan: Precise underwater imaging technology for various applications like marine archaeology and search operations. ",
  },
  {
    id: 7,
    number: "07",
    title: "Third-Party Software Integration",
    text: "Third-Party Software Integration: Seamlessly incorporate external software into your system for enhanced functionality and versatility. ",
  },
  {
    id: 8,
    number: "08",
    title: "Multiple WASSP Transducers",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. ",
  },
];

const Features = () => {
  const [activeButtonId, setActiveButtonId] = useState(8);
  const [activeData, setActiveData] = useState(
    data.find((dataItem) => dataItem.id === 8)
  );

  const handleClick = (dataItem) => {
    setActiveData(dataItem);
    setActiveButtonId(dataItem.id);
  };

  return (
    <section id="features">
      <div className="container feature_section">
        <div className="feature_header">
          <h6>03</h6>
          <h6>FEATURES</h6>
        </div>

        <div className="feature_container">
          <div className="button-container">
            {data.map((dataItem, index) => (
              <button
                className={`btn_features ${
                  dataItem.id === activeButtonId ? "clicked" : ""
                } ${index > 8 ? "hide-on-mobile" : ""}`}
                key={dataItem.id}
                onClick={() => handleClick(dataItem)}
              >
                <span className="span_number">{dataItem.number}</span>
                <span>{dataItem.title}</span>
              </button>
            ))}
          </div>
          <div className="text-container">
            {activeData && (
              <article>
                <h5 className="feature_number">{activeData.number}</h5>
                <h4 className="feature_title">{activeData.title}</h4>
                <p className="feature_text">{activeData.text}</p>
              </article>
            )}
          </div>
          <div className="image_features">
            <img className="layers2" src={LAYERS2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
