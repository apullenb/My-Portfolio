import React from 'react'
import HomeMain from '../../Components/HomeMain/HomeMain'
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
            <HomeMain {...homeObjOne} />
        </>
    )
}

export default Home
