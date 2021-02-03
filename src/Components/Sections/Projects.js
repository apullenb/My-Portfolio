import React from "react";
import { Button } from "../Button/Button";

function Projects(props) {
  const proj = props.project
  return (
    <div className= 'project-section'>
    <div className='project-box'>
      <div className='project-box-col'>
      <img src ={proj.image} alt={proj.name} />
      
     <a href={proj.live}><Button buttonStyle='btn-primary' buttonSize='btn-wide' buttonColor="blue">View Live</Button></a>
      <a href={proj.repo}><Button buttonStyle='btn-primary' buttonSize='btn-wide' buttonColor="primary">View Repo</Button></a>
      </div>
     <div className='project-box-col'>
     <h3>{proj.name}</h3>
     <p>{proj.description}</p>
     <div className='technology'>
       {proj.technology.map((element, i) => {
         return <p className='tech' key={i}>{element}</p>
       })}
     </div>
      </div>
      </div>
    </div>
  );
}

export default Projects;
