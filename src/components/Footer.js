import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-section">
      <p>Copyright &copy; 2023 By Jakob Malmgren | All Rights Reserved </p>
      <div className="footer-section-icons">
        <FaGithub></FaGithub>
        <CiLinkedin></CiLinkedin>
      </div>
    </div>
  );
};

export default Footer;
