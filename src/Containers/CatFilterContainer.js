import React from 'react'
import CatAgeFilter from '../Components/CatAgeFilter.js'
import CatHairFilter from '../Components/CatHairFilter.js'
import CatSizeFilter from '../Components/CatSizeFilter.js'
import CatHouseTrainedFilter from '../Components/CatHouseTrainedFilter.js'

class CatFilterContainer extends React.Component{
    render(){
        return(
            <>
            <div id="catFilterDiv">
            <CatAgeFilter />
            <CatSizeFilter />
            <CatHairFilter />
            <CatHouseTrainedFilter />
            </div>
            </>
        )
    }
}

export default CatFilterContainer