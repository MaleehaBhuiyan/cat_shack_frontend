import React from 'react'
import HomeCarousel from '../Components/HomeCarousel'
import FeaturedCats from '../Components/FeaturedCats'
import FeauturedCats from '../Components/FeaturedCats'
class HomePage extends React.Component{
    render(){
        return(
            <>
            <HomeCarousel />
            <FeauturedCats />
            </>
        )
    }
}

export default HomePage