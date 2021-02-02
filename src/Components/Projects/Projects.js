import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Projects.css";

function Projects(props) {
  const proj = props.project
  return (
    <div className='project-box'>
      <h3>{proj.name}</h3>
    </div>
  );
}

export default Projects;
