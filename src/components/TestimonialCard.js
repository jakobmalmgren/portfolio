import React from "react";
import "./TestimonialCard.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = (props) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard-wrapper">
        <p className="testimonialCard-text">
          <FaQuoteRight></FaQuoteRight>
          <br />
          <br />
          {props.testimonial}
          <br />
          <br />
          <FaQuoteLeft></FaQuoteLeft>
        </p>
        <br />
        <h2 className="testimonialCard-header">
          ~ {props.testimonialPerson} ~
        </h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
