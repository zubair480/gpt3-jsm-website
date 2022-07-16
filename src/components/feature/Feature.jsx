import React from "react";
import "./Feature.css";

export default function Feature({ title, text }) {
  return (
    <div className="gpt3__features-container_feature">
      <div className="gpt3__features-container_feature-now">
        <div className="gpt3__features-container_features-title">
          <div> </div>
          <h1>{title}</h1>
        </div>

        <div className="gpt3__features-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
