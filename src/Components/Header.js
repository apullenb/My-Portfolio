import React from 'react'
import profile from './profile pic.jpg'
import computer from './img4.jpg'

function Header() {
    return (
        <div className='header'>
            <div className='img-box'>
            <img src={profile} className='header-img1'/>
            </div>
            <div className='header-content'>
            <h1>Hello.</h1>
            <h3>I'm Andrea Pullen,</h3>
            <h3> a full-stack software developer.</h3>
            </div>
            <img src={computer} className='header-img2' />
           
        </div>
    )
}

export default Header
