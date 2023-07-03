import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Home = () => {
  return (
    <div className="home-container" id="home">
      {/* <Navbar></Navbar> */}
      <MobileNav></MobileNav>
    </div>
  );
};

export default Home;
