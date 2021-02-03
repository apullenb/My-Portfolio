import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import Projects from "./Projects";
import "./Sections.css";
import Skills from "./Skills";

function Sections(props) {
  const {
    theme,
    imgStart,
    headline,
    description,
    description2,
    description3,
    img2,
    img,
    alt,
    items,
  } = props.section;


  return (
    <div>
      <div
        className={`section ${theme}`}
        style={{
          flexDirection: imgStart === "start" ? "row-reverse" : "row",
        }}
      >  {img2 && <img src={img2} alt={alt} className='img2' />}
        <div className="section-content">
       
        <h1 className="heading">{headline}</h1>
       
          <p>{description}</p>
          <p>{description2}</p>
          <p>{description3}</p>
        </div>
        <div className="section-img-box">
          <img src={img} alt={alt} id='b' />
          
        </div>
        <div>
        {items.length > 8 ? ( <div className='skills-section'> 
            {items.map((item, i) => {
              return <Skills skill={item} key={i} />
            })}</div>) : ('')}
            {items.length === 3 ? ( <div className='projects-section'> 
            {items.map((item, i) => {
              return <Projects project={item} key={i} />
            })}</div>) : ('')}
        </div>
      </div>
    </div>
  );
}

export default Sections;
