import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-icons">
        <div className="footer-section-icon-wrapper">
          <a href="https://github.com/jakobmalmgren">
            <FaGithub></FaGithub>
          </a>
        </div>
        <div className="footer-section-icon-wrapper">
          <a href="https://www.linkedin.com/in/jakob-malmgren-832062226/">
            <CiLinkedin></CiLinkedin>
          </a>
        </div>
      </div>
      <p>Copyright &copy; 2023 By Jakob Malmgren | All Rights Reserved </p>
    </div>
  );
};

export default Footer;
