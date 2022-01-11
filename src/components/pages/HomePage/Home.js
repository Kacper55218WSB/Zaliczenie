import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven } from './Data'
import '../../../App.css'
import Pricing from '../../Pricing'

//kolejność treści na stronie

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <Pricing />
            <HeroSection {...homeObjFive} />
            <HeroSection {...homeObjSix} />
            <HeroSection {...homeObjSeven} />
        </>
    )
}

export default Home