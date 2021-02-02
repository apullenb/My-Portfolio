import React from 'react'
import profile from './profile pic.jpg'

function Header() {
    return (
        <div className='header'>
            <div className='img-box'>
            <img src={profile} />
            </div>
            <div className='header-content'>
            <h1>Hello.</h1>
            <h3>I'm Andrea Pullen,</h3>
            <h3>a full-stack software developer</h3>
            <h3>& internet marketing strategist.</h3>
            </div>
        </div>
    )
}

export default Header
