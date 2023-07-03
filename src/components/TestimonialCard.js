import React from "react";
import "./TestimonialCard.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard-text-wrapper">
        <h2 className="testimonialCard-header">Jon Doe</h2>
        <p className="testimonialCard-text">
          <FaQuoteRight></FaQuoteRight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          natus, amet dignissimos est minima et ullam suscipit nostrum
          cupiditate! Repudiandae!
          <FaQuoteLeft></FaQuoteLeft>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
