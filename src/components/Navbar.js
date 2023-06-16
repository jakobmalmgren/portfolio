import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import Icon from "./svg/Icon";
import { TfiEmail } from "react-icons/tfi";
import { BsBrush } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RxHome } from "react-icons/rx";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="nav">
      <div className="burger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={28}
          duration={0.2}
          easing="ease-in"
          rounded
        />
      </div>

      <div className="nav-content">
        <ul className="link-container">
          <div className="logo">
            <Icon></Icon>
          </div>

          <li>
            <RxHome className="link-icon"></RxHome>
            <a name="/">HOME</a>
            {/* <Link to="/Home">HOME</Link> */}
          </li>
          <li>
            <GoPerson className="link-icon"></GoPerson>
            <a name="/about">ABOUT</a>
            {/* <Link to="/About">ABOUT</Link> */}
          </li>
          <li>
            <BsBrush className="link-icon"></BsBrush>
            <a name="/projects">PROJECTS</a>
            {/* <Link to="/Projects">PROJECTS</Link> */}
          </li>
          <li>
            <TfiEmail className="link-icon"></TfiEmail>
            <a name="/contact">CONTACT</a>
            {/* <Link to="/Contact">CONTACT</Link> */}
          </li>
        </ul>
      </div>
      <MobileNav isOpen={isOpen}></MobileNav>
    </div>
  );
};

export default Navbar;
