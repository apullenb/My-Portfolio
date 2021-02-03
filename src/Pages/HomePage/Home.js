import React from 'react'
import Contact from '../../Components/Contact'
import Header from '../../Components/Header'
import Projects from '../../Components/Sections/Projects'
import Sections from '../../Components/Sections/Sections'
import sections from './Data'

function Home() {
    
    return (
        <div>
            <Header />
        <div>
           {sections.map((section, i) => {
         return <Sections section={section} key={i}/>})}
         <Contact />
        </div>

        </div>
    )
}

export default Home
