import React from 'react'
import Header from '../../Components/Header'
import Projects from '../../Components/Projects/Projects'
import Sections from '../../Components/Sections/Sections'
import sections from './Data'

function Home() {
    
    return (
        <div>
            <Header />
        <div>

            {/* -Sections instead of projects
            -Create new style sheet with themes 
            -Create an array of objects for each Section
            -Create a theme for each section
           - Create an array of objects for projects
           - Create an array of objects for skills */}

           {sections.map((section, i) => {
         return <Sections section={section}/>})}
        </div>
        </div>
    )
}

export default Home
