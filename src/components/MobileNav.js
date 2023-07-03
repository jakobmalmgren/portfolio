//
//   return (
//     <div className="nav">
//       <div className="burger">
//         <Hamburger
//           toggled={isOpen}
//           toggle={setOpen}
//           size={28}
//           duration={0.2}
//           easing="ease-in"
//           rounded
//         />
//       </div>

//       <div className="nav-content">
//         <ul className="link-container">
//           <a href="#home">
//             <Logo></Logo>
//           </a>

//           <li>
//             <a href="#home">HOME</a>
//           </li>
//           <li>
//             <a href="#about">ABOUT</a>
//           </li>
//           <li>
//             <a href="#projects">PROJECTS</a>
//           </li>
//           <li>
//             <a href="#testimonials">TESTIMONIALS</a>
//           </li>
//           <li>
//             <a href="#contact">CONTACT</a>
//           </li>
//         </ul>
//       </div>
//       <MobileNav isOpen={isOpen}></MobileNav>
//     </div>
//   );
// };

// export default Navbar;
import "./MobileNav.css";
import { Divide as Hamburger } from "hamburger-react";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsBrush } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RxHome } from "react-icons/rx";
import { BsChatLeftText } from "react-icons/bs";
import { useState } from "react";

const MobileNav = () => {
  const linkItemsMob = [
    <a href="#home" className="navigation-link-mob">
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
  const [selected, setSelected] = useState(null);
  const [isOpen, setOpen] = useState(false);

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
      <div
        className="burger-mob"
        style={{
          border: isOpen === false ? "3px solid white" : "3px solid #023610",
          // color: isOpen === false ? "white" : "black",
        }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={28}
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
          <VscGithub></VscGithub>
          <CiLinkedin></CiLinkedin>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
