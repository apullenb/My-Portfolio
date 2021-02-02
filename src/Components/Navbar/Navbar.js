import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFolderOpen } from "react-icons/fa";
import { Button } from "../Button/Button";
import './Navbar.css'
import {IconContext} from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

useEffect(() => {
  showButton()
}, [])

  window.addEventListener("resize", showButton);
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <div className="navbar-container containers">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           <FaFolderOpen />   Portfolio
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/contact" className="btn-link" >
                  <Button buttonStyle="btn-outline">Contact Me</Button>
                </Link>
              ) : (
                <Link to="/contact" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn-outline" buttonSize="btn-mobile">
                    Contact Me
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;