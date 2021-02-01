import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./HomeMain.css";

function HomeMain({
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
      <div className={lightBg ? "home-main-section" : "home-main darkBG"}>
        <div className="container">
          <div
            className="row home-main-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
              <div className='col'>
                  <div className='home-main-text-wrapper'>
                      <div className='top-line'>{topLine}</div> 
                      <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                      <p className={lightTextDesc ? 'home-main-subtitle' : 'home-main-subtitle dark'}>{description}</p>
                      <Link to='/'>
                          <Button buttonSize='btn-wide' buttonColor='blue'>
                              {buttonLabel}
                          </Button>
                      </Link>
                  </div>
              </div>
              <div className='col'>
                  <div className='home-main-img-wrapper'>
                      <img src={img} alt={alt} className='home-main-img' />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
