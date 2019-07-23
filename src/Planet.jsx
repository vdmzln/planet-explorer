import React from "react";
import "./planet.css";

function Splitting({ children = "", ...props }) {
  return [...children].map((char, i) => (
    <span {...props} key={i} style={{ "--char-index": i }}>
      {char}
    </span>
  ));
}

export default function Planet({ planet, active }) {
  const { name, image, details } = planet;

  const imageUrl = `${process.env.PUBLIC_URL}/images/${image}`;

  return (
    <div className={`planet ${active ? "active" : ""}`}>
      <div className="planet-title">
        <h1 className="planet-title-word">
          <Splitting className="planet-title-char">{name}</Splitting>
        </h1>
        <h4 className="planet-subtitle-text">
          <span className="planet-subtitle-text-span">
            Lorem ipsum dolor sit amet.
          </span>
        </h4>
      </div>
      <div className="planet-details">
        <div className="planet-detail">
          <h1 className="planet-detail-value">{details.tilt}</h1>
          <h4 className="planet-detail-title">Axial tilt</h4>
        </div>
        <div className="planet-detail">
          <h1 className="planet-detail-value">{details.gravity}</h1>
          <h4 className="planet-detail-title">Gravity</h4>
        </div>
        <div className="planet-detail">
          <h1 className="planet-detail-value">{details.days}</h1>
          <h4 className="planet-detail-title">Day hours</h4>
        </div>
      </div>
      <figure className="planet-figure">
        <img className="planet-image" src={imageUrl} alt={`Planet ${name}`} />
      </figure>
    </div>
  );
}
