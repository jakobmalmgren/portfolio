import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-icons">
        <div className="footer-section-icon-wrapper">
          <FaGithub></FaGithub>
        </div>
        <div className="footer-section-icon-wrapper">
          <CiLinkedin></CiLinkedin>
        </div>
      </div>
      <p>Copyright &copy; 2023 By Jakob Malmgren | All Rights Reserved </p>
    </div>
  );
};

export default Footer;
