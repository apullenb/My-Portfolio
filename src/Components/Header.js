import React from 'react'
import profile from './profile pic.jpg'

function Header() {
    return (
        <div className='header'>
            <img src={profile} />
            <h1>Hello.</h1>
        </div>
    )
}

export default Header
