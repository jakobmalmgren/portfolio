import React from "react";
import "./Home.css";
// import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-container-icon-wrapper">
        <a href="#home">
          <img
            className="home-container-icon"
            src="/images/iconJakob.svg"
            alt=""
          />
        </a>
      </div>
      <div className="home-text">
        <div className="home-text-wrapper">
          <h1>HEY, I AM JAKOB</h1>
          <h2> A FRONT-END-DEVELOPER</h2>
          <p>WITH PASSION FOR UX/UI</p>
        </div>
      </div>

      <MobileNav></MobileNav>
    </div>
  );
};

export default Home;
