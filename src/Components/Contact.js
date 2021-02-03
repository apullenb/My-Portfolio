import React from "react";
import Form from "./Form";
import img from "./phone.jpg";
import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../App.css";

function Contact() {
  return (
    <div className="section brown ">
      <div className="section-content">
        <h1 className="heading">CONTACT ME</h1>
        <Form />
      </div>
      <div className="section-img-box">
        <div
          className="icons-top"
          style={{ fontSize: "25px", color: "rgba(222, 223, 208, 0.897" }}
        >
          <span>
            <FaEnvelope className="icon" style={{ textAlign: "right" }} />
            apullenb@gmail.com
          </span>
          <span>
            <FaPhoneAlt className="icon" style={{ textAlign: "right" }} />
            (214)952-0634
          </span>
        </div>
        <img src={img} alt="phone" id="b" />
        <div className="icons-contact">
          <a href="https://github.com/apullenb">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/andrea-pullen/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://zety.com/profile/andrea-pullen">
            <FaLink className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
