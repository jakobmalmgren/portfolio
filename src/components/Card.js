import React from "react";
import "./Card.css";
import ExpandingProjectCard from "./ExpandingProjectCard";

const Card = (props) => {

  return (
    
    <div className="card-wrapper">
      <div className="card">
        <img className="card-img" src={`images/${props.image}`} alt="" />
        <div className="layer">
          <h5>{props.title}</h5>
        </div>
      </div>

      <ExpandingProjectCard {...props}></ExpandingProjectCard>
    </div>
  );
};

export default Card;
