import React from "react";
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
    img3,
    alt,
    items,
    sign,
  } = props.section;

  return (
    <div>
      <div
        className={`section ${theme}`}
        id={headline.trim()}
        style={{
          flexDirection: imgStart === "start" ? "row-reverse" : "row",
        }}
      >
        {" "}
        {img2 && <img src={img2} alt="retroback" className="img2" />}
        <div className="section-content">
          <h1 className="heading">{headline}</h1>
          <p>{description}</p>
          <p>{description2}</p>
          <p>{description3} </p>
          <span className={"sign"}>{sign}</span>
        </div>
        <div className={`section-img-box `}>
          <img src={img} alt={alt} id="b" />
          {img3 && <img src={img3} alt="image3" id="b" className="m" />}
        </div>
        <div>
          {items.length > 8 ? (
            <div className="skills-section">
              {items.map((item, i) => {
                return <Skills skill={item} key={i} />;
              })}
            </div>
          ) : (
            ""
          )}
          {items.length === 4 ? (
            <div className="projects-section">
              {items.map((item, i) => {
                return <Projects project={item} key={i} />;
              })}
              <a
                href="https://github.com/apullenb/"
                target="blank"
                style={{
                  alignSelf: "center",
                  margin: "18px",
                  filter: "drop-shadow(2px 2px 1px #94c2c0)",
                }}
              >
                <Button buttonSize="btn-large" buttonColor="primary">
                  More Projects on GitHub
                </Button>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Sections;
