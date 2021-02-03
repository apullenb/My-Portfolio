import React from "react";
import profile from "./profile pic.jpg";
import computer from "./img4.jpg";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <div className="header">
      <div className="img-box">
        <img src={profile} className="header-img1" alt="pic" />
      </div>
      <div className="header-content">
        <h1>Hello.</h1>
        <h3>I'm Andrea Pullen,</h3>
        <h3> a full-stack software developer.</h3>
        <div className="icons">
          <a href="https://github.com/apullenb">
            <FaGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/andrea-pullen/">
            <FaLinkedin className='icon'/>
          </a>
          <a href="https://zety.com/profile/andrea-pullen">
            <FaLink className='icon'/>
          </a>
        </div>
      </div>
      <img src={computer} className="header-img2" alt="retro" />
    </div>
  );
}

export default Header;
