import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";

import TestimonialCard from "./TestimonialCard";

const Carousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,

    // className: "center",
    // centerMode: true,

    // centerPadding: "60px",

    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials">
      <div className="carousel-container-header">
        <p> ~ Read ~</p>
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
