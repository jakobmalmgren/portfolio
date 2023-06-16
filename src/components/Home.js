import React from "react";
import "./Home.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="pre-tags">
          <div className="tags">&lt;html&gt;</div>
          <div className="tags"> &lt;body&gt;</div>
          <div className="tags"> &lt;h1&gt;</div>
        </div>

        <h1 className="main-text">
          Hi, <br /> I'm Jakob,
          <br /> A Web-Developer.
        </h1>

        <div className="tags header-close">&lt;/h1&gt;</div>

        <div className="tags paragraph-open">&lt;p&gt;</div>
        <h4 className="sub-text">Front end developer with passion for UX/UI</h4>
        <div className="tags paragraph-close">&lt;/p&gt;</div>
        <div className="post-tags">
          <div className="tags">&lt;/body&gt; </div>
          <div className="tags">&lt;/html&gt;</div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">
          <FaGithub></FaGithub>
        </div>
        <div className="icon">
          <CiLinkedin></CiLinkedin>
        </div>
      </div>
    </div>
  );
};

export default Home;
