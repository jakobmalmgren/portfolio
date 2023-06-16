import React from "react";
// import { Link } from "react-router-dom";
import "./MobileNav.css";
const MobileNav = (props) => {
  return (
    <ul
      className={
        props.isOpen ? "link-container-mob-active" : "link-container-mob"
      }
    >
      <li>
        <a name="/">HOME</a>
        {/* <Link to="/Home">HOME</Link> */}
      </li>
      <li>
        <a name="/about">ABOUT</a>
        {/* <Link to="/About">ABOUT</Link> */}
      </li>
      <li>
        <a name="/projects">PROJECTS</a>
        {/* <Link to="/Projects">PROJECTS</Link> */}
      </li>
      <li>
        <a name="/contact">CONTACT</a>
        {/* <Link to="/Contact">CONTACT</Link> */}
      </li>
    </ul>
  );
};

export default MobileNav;
