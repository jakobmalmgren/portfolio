import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutMe-section">
        <div className="aboutMe-name">
          <h1>JAKOB</h1>
        </div>
        <div className="aboutMe-surname">
          <h1>MALMGREN</h1>
        </div>

        <div className="aboutMe-birth">
          <h2>Kristianstad, Sweden</h2>
          <h2>June 18, 1987</h2>
          <h2>13.48 PM</h2>
        </div>
      </div>
      <div className="mySkills-section">
        <h1>My Toolkit</h1>
        <img src="/images/html.png" alt="" className="skill-icon" />
        <img src="/images/typescript.png" className="skill-icon" alt="" />
        <img src="/images/atom.png" className="skill-icon" alt="" />
        <img src="/images/css-3.png" className="skill-icon" alt="" />
        <img src="/images/java-script.png" className="skill-icon" alt="" />
        <img src="/images/sass.png" className="skill-icon" alt="" />
        <img src="/images/figma.png" className="skill-icon" alt="" />
        <img src="/images/github.png" className="skill-icon" alt="" />
        <img src="/images/tailwind.png" className="skill-icon" alt="" />
        <h1>My Skills</h1>
        <p>Redux</p>
        <p>API:s like context api etc, rest api?</p>
        <p>CSS typing like: styled components, bootstrap, tailwind </p>
        <p>responsive</p>
        <p>vanilla JS, react, class-components, function-components</p>
        <p>BEM, typescript</p>
        <p>libraries?, frameworks?</p>
        <p>git, github</p>
        <p>folder structure, clean code</p>
        <p>firebase</p>
        <p>VS</p>
      </div>
    </div>
  );
};

export default About;
