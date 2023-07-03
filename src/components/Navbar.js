import "./Navbar.css";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsBrush } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RxHome } from "react-icons/rx";
import { BsChatLeftText } from "react-icons/bs";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
const Navbar = () => {
  const linkItems = [
    <a href="#" className="navigation-link">
      <span className="navigation-icon">
        <RxHome></RxHome>
      </span>
      <span className="navigation-text">HOME</span>
    </a>,
    <a href="#" className="navigation-link">
      <span className="navigation-icon">
        <RxPerson></RxPerson>
      </span>
      <span className="navigation-text">ABOUT</span>
    </a>,
    <a href="#" className="navigation-link">
      <span className="navigation-icon">
        <BsBrush></BsBrush>
      </span>
      <span className="navigation-text">PROJECTS</span>
    </a>,
    <a href="#" className="navigation-link">
      <span className="navigation-icon">
        <BsChatLeftText></BsChatLeftText>
      </span>
      <span className="navigation-text">TESTIMONIALS</span>
    </a>,
    <a href="#" className="navigation-link">
      <span className="navigation-icon">
        <TfiEmail></TfiEmail>
      </span>
      <span className="navigation-text">CONTACT</span>
    </a>,
  ];
  const [selected, setSelected] = useState(null);
  const [isOpen, setOpen] = useState(false);
  function handleClick(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  const items = linkItems.map((item, i) => {
    return (
      <li
        className={
          selected === i ? "navigation-list active" : "navigation-list"
        }
        onClick={() => {
          handleClick(i);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="navigation-wrapper">
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
      <div className={isOpen ? "navigation" : "navigation-displayNone "}>
        <ul className="navigation-ul">
          {items}

          <div className="indicator"></div>
        </ul>
        <div className="navigation-icons">
          <VscGithub></VscGithub>
          <CiLinkedin></CiLinkedin>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
