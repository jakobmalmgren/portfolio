import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../testimonialsData";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testCard = testimonialsData.map((data) => {
    return <TestimonialCard {...data}></TestimonialCard>;
  });

  return (
    <div className="section" id="testimonials">
      <div>
        <div className="carousel-container-header">
          <p> ~ Read ~</p>
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>{testCard}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
