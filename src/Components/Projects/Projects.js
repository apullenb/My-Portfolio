import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Projects.css";

function Projects({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={lightBg} >
        <div className="container" >
          <div
            className="row projects-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col" >
              <div className="projects-text-wrapper" >
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "projects-subtitle"
                      : "projects-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/">
                  <Button buttonSize="btn-wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="projects-img-wrapper">
                <img src={img} alt={alt} className="projects-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
