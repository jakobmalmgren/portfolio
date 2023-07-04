import "./About.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const About = () => {
  const tools = [
    <div className="about-wrapper">
      <div>
        <img src="/images/html.png" alt="" className="skill-icon" />
      </div>
      <div>
        <img src="/images/firebase.png" alt="" className="skill-icon" />
      </div>
      <div>
        <img src="/images/redux.svg" alt="" className="skill-icon" />
      </div>
      <div>
        <img src="/images/typescript.png" className="skill-icon" alt="" />
      </div>
      <div>
        <img src="/images/atom.png" className="skill-icon" alt="" />
      </div>
    </div>,
    <div className="about-wrapper">
      <div>
        <img src="/images/css-3.png" className="skill-icon" alt="" />
      </div>
      <div>
        <img src="/images/java-script.png" className="skill-icon" alt="" />
      </div>
      <div>
        <img src="/images/sass.png" className="skill-icon" alt="" />
      </div>
    </div>,
    <div className="about-wrapper">
      <div>
        <img src="/images/figma.png" className="skill-icon" alt="" />
      </div>
      <div>
        <img src="/images/tailwind.png" className="skill-icon" alt="" />
      </div>
      <div>
        <img src="/images/github.png" className="skill-icon" alt="" />
      </div>
    </div>,
  ];
  const skills = [
    "API:s",
    "Responsiveness",
    "Classcomponents",
    "Functioncomponents",
    "Folder structure & Clean code",
    "Visual Studios",
    "Testing & Debugging",
    "English - A level",
    "Problemsolver",
    " Good communicator",
    "Teamplayer",
    "Creative",
    "BEM",
    "HOC:s",
  ];
  return (
    <div className="about-section" id="about">
      <div className="about-section-info-header">
        <p> ~ Focus ~</p>
        <h1>ABOUT ME</h1>
      </div>
      <ul className="honeycomb">
        <li className="honeycomb-cell">
          <div className="honeycomb-cell_img"></div>
          <div className="honeycomb-cell_quote">
            <span>
              <FaQuoteRight></FaQuoteRight>
            </span>
            People don't care about what you say, they care about what you build
            <span>
              <FaQuoteLeft></FaQuoteLeft>
            </span>
          </div>
        </li>
        <li class="honeycomb-cell">
          <img
            className="honeycomb-cell_img"
            src="/images/skills.avif"
            alt=""
          />
          <div className="honeycomb-cell_title">SKILLS</div>
          <div className="honeycomb-cell-content">
            {skills.map((skill) => {
              return <p>{skill}</p>;
            })}
          </div>
        </li>

        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell_img"
            src="/images/interests.avif"
            alt=""
          />
          <div className="honeycomb-cell_title">INTERESTS</div>
          <div className="honeycomb-cell-content">
            <p>
              I am a person with passion for <span>NATURE</span> - Everything
              from the thriving Amazonas to the mountains of Patagonia.
              <span>TRAVEL</span> - My favorite destination, a continent that
              has it all - Southamerica. The bustling big cities, beautiful
              beaches combined with the fantastic people and atmosphere.
              <span>SPORTS</span> - A sportfreak with a heart for english
              football and Manchester United. <span>BUT</span> , recently I have
              also become very intrested in <span>COMPUTERS</span>,
              <span> IT </span>and <span>TECH</span>, therefore this path as a
              front end developer.
            </p>
          </div>
        </li>
        <li className="honeycomb-cell">
          <div className="honeycomb-cell_img"></div>
          <div className="honeycomb-cell_quote">
            <span>
              <FaQuoteRight></FaQuoteRight>
            </span>
            It´s better to wait for a productive developer to become available
            than it is to wait for the first available developer to become
            productive
            <span>
              <FaQuoteLeft></FaQuoteLeft>
            </span>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell_img" src="/images/about.JPEG" alt="" />
          <div className="honeycomb-cell_title">ABOUT</div>
          <div className="honeycomb-cell-content">
            <p>
              I was born in 1987 in Sweden, in a small city called Kristianstad.
              I Recently moved to Barcelona and I have been living there for
              about 2 years. Originally I am a teacher, but my interest in
              developing made me think and therefore I am now changing path of
              career. I am very flexible and if the right opportunity comes I am
              ready to move anywhere.
            </p>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img
            className="honeycomb-cell_img"
            src="/images/education.avif"
            alt=""
          />
          <div className="honeycomb-cell_title">EDUCATION</div>
          <div className="honeycomb-cell-content">
            <p>Certificates:</p>
            <br />
            <div className="honeycomb-cell-content-link-wrapper">
              <a href="/images/frontenddeveloper.pdf" target="blank">
                The Front End Developer Career Path, Scrimba
              </a>
            </div>
            <br /> <br />
            <div className="honeycomb-cell-content-link-wrapper">
              <a href="/images/advancedReact.pdf" target="blank">
                Advanced React, Scrimba
              </a>
            </div>
            <br /> <br />
            <div className="honeycomb-cell-content-link-wrapper">
              <a href="/images/bootcamp.pdf" target="blank">
                The Front End Developer Bootcamp, Sundsgarden
              </a>
            </div>
          </div>
        </li>

        <li class="honeycomb-cell">
          <img className="honeycomb-cell_img" src="/images/tool.avif" alt="" />
          <div className="honeycomb-cell-content">
            {tools.map((tool) => {
              return <div className="about-wrapper">{tool}</div>;
            })}
          </div>
          <div className="honeycomb-cell_title">TOOLBOX</div>
        </li>
        <li className="honeycomb-cell honeycomb_Hidden"></li>
      </ul>
    </div>
  );
};

export default About;
