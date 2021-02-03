import React from "react";
import Form from "./Form";
import img from "./phone.jpg";
import '../App.css'

function Contact() {
  return (
    <div className="section brown ">
      <div className="section-content">
        <h1 className="heading">CONTACT ME</h1>
        <Form />
      </div>
      <div className="section-img-box contact">
        <img src={img} alt="phone" id="b" />
      </div>
   
     
    </div>
  );
}

export default Contact;
