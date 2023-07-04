import "./MobileNav.css";
import { Link } from "react-scroll";
import { Divide as Hamburger } from "hamburger-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsBrush } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RxHome } from "react-icons/rx";
import { BsChatLeftText } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRef } from "react";

const MobileNav = () => {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef.current);
  });

  const linkItemsMob = [
    <a ref={myRef} href="#home" className="navigation-link-mob">
      <span className="navigation-text-mob">HOME</span>
      <span className="navigation-icon-mob">
        <RxHome></RxHome>
      </span>
    </a>,
    <a href="#about" className="navigation-link-mob">
      <span className="navigation-text-mob">ABOUT</span>
      <span className="navigation-icon-mob">
        <RxPerson></RxPerson>
      </span>
    </a>,
    <a href="#projects" className="navigation-link-mob">
      <span className="navigation-text-mob">PROJECTS</span>
      <span className="navigation-icon-mob">
        <BsBrush></BsBrush>
      </span>
    </a>,
    <a href="#testimonials" className="navigation-link-mob">
      <span className="navigation-text-mob">TESTIMONIALS</span>
      <span className="navigation-icon-mob">
        <BsChatLeftText></BsChatLeftText>
      </span>
    </a>,
    <a href="#contact" className="navigation-link-mob">
      <span className="navigation-text-mob">CONTACT</span>
      <span className="navigation-icon-mob">
        <TfiEmail></TfiEmail>
      </span>
    </a>,
  ];
  const [selected, setSelected] = useState(0);
  const [isOpen, setOpen] = useState(true);

  function handleClick(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  const items = linkItemsMob.map((item, i) => {
    return (
      <li
        className={
          selected === i ? "navigation-list-mob active" : "navigation-list-mob"
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
    <div className="navigation-mob-wrapper">
      <div className="navigation-mob-burger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          duration={0.3}
          easing="ease-in"
          rounded
        />
      </div>
      <div
        className={isOpen ? "navigation-mob" : "navigation-mob-displayNone "}
      >
        <ul className="navigation-ul-mob">
          {items}
          <div className="indicator-mob"></div>
        </ul>
        <div className="navigation-icons-mob">
          <div className="navigation-icons-mob-icon-wrapper">
            <FaGithub></FaGithub>
          </div>
          <div className="navigation-icons-mob-icon-wrapper">
            <CiLinkedin></CiLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
