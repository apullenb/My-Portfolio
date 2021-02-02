import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Sections.css";
import Skills from "./Skills";

function Sections(props) {
  const {
    theme,
    imgStart,
    headline,
    description,
    buttonLabel,
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
      >
        <div className="section-content">
          <h1 className="heading">{headline}</h1>
          <h4>{description}</h4>
          <Link to="/">
            <Button buttonSize="btn-wide" buttonColor="blue">
              {buttonLabel}
            </Button>
          </Link>
        </div>

        <div className="section-img-box">
          <img src={img} alt={alt} />
        </div>
        <div className={`section ${theme}`}>
         <div className='skills-section'> {items.length > 8 &&
            items.map((item, i) => {
              return <Skills skill={item} key={i} />;
            })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
