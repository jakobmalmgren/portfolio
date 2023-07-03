import React from "react";
import "./Home.css";
// import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Home = () => {
  return (
    <div className="home-container" id="home">
      {/* <Navbar></Navbar> */}
      <MobileNav></MobileNav>
      <div className="home-container-icon-wrapper">
        <a href="#home">
          <img
            className="home-container-icon"
            src="/images/iconJakob.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
