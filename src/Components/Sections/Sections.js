import React, {useState} from "react";
import Projects from "./Projects";
import "./Sections.css";
import Skills from "./Skills";

function Sections(props) {

  const [display, setDisplay] = useState('hide');
  const [buttonText, setButtonText] = ('Expand');

  const handleDisplay = () => { setDisplay('')}

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
        className={`section ${theme}`} id={headline.trim()}
        style={{
          flexDirection: imgStart === "start" ? "row-reverse" : "row",
        }}
      >
        {" "}
        {img2 && <img src={img2} alt="retroback" className="img2" />}
        <div className="section-content">
          <h1 className="heading">{headline}</h1>
          <p className=''>{description}</p>
          <p className={display}>{description2}</p>
          <p className={display}>{description3} </p>
          <span className={`sign ${display}`}>{sign}</span>
          <button className={buttonText}>Expand</button>
        </div>
        <div className={`section-img-box `}>
        <img src={img} alt={alt} id="b" />
          {img3 && <img src={img3} alt="image3" id="b" className={`m ${display}`}/>}
        </div>
        <div className={display}>
          {items.length > 8 ? (
            <div className="skills-section">
              {items.map((item, i) => {
                return <Skills skill={item} key={i} />;
              })}
            </div>
          ) : (
            ""
          )}
          {items.length === 3 ? (
            <div className="projects-section">
              {items.map((item, i) => {
                return <Projects project={item} key={i} />;
              })}
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
