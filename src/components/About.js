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
    "Fetching API:s",
    "Responsiveness",
    "Classcomponents, Functioncomponents",
    "BEM",
    "Folder structure, Clean code",
    "Visual Studios",
    "Testing & Debugging",
    "Problemsolver, Good communicator, Teamplayer, Creative",
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, illum aperiam. Repellat expedita est excepturi magnam
              odio praesentium laborum voluptatum non nostrum, repellendus ad
              beatae eaque sit. Ut, qui velit.
            </p>
          </div>
        </li>
        <li className="honeycomb-cell">
          <div className="honeycomb-cell_img"></div>
          <div className="honeycomb-cell_quote">
            <span>
              <FaQuoteRight></FaQuoteRight>
            </span>
            First, solve the problem.Then write the code
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, illum aperiam. Repellat expedita est excepturi magnam
              odio praesentium laborum voluptatum non nostrum, repellendus ad
              beatae eaque sit. Ut, qui velit.
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
