import React from "react";
import "./planet.css";

export default function Planet({ planet, active }) {
  const { name, image, details } = planet;

  const imageUrl = `${process.env.PUBLIC_URL}/images/${image}`;

  return (
    <div className={`planet ${active ? "active" : ""}`}>
      <div className="planet-title">
        <h1>{name}</h1>
        <h4 className="planet-subtitle-text">Lorem ipsum dolor sit amet.</h4>
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
        <img className="planet-image" src={imageUrl} />
      </figure>
    </div>
  );
}
