import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFolderOpen } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

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
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "rgb(240, 237, 219)" }}>
        <div className="navbar">
          <div className="navbar-container containers" id='top'>
            <a href="#top" className="navbar-logo" onClick={closeMobileMenu}>
              <FaFolderOpen /> {' '} Portfolio
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href='#About Me' className="nav-links" onClick={closeMobileMenu}>
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="/#Projects" className="nav-links" onClick={closeMobileMenu}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                {button ? (
                  <a href="#contact" className="nav-links">
                    Contact Me
                  </a>
                ) : (
                  <a href="#contact"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Me
                  </a>
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
