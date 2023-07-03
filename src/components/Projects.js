import React from "react";
import "./Projects.css";
import Card from "./Card";
import data from "../data";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-section-header">
        <p> ~ Explore ~</p>
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-section-cards">
        {data.map((data, i) => {
          return <Card {...data} i={i}></Card>;
        })}
      </div>
    </div>
  );
};

export default Projects;
