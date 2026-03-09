import React from "react";
import "./Tittle.css";

const Tittle = (props) => {
  return (
    <div className="tittle">
      <p>{props.tittle}</p>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Tittle;
