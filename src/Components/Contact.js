import React from 'react'
import img from './phone.jpg'

function Contact() {
    return (
        <div className='section brown'>
            <div className="section-content">
            <h1 className="heading">CONTACT ME</h1>
       </div>
       <div className="section-img-box">
          <img src={img} alt='phone' id='b' /> 
        </div>
        </div>
    )
}

export default Contact
