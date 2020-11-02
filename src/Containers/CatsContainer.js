import React from 'react'
import CatsCard from '../Components/CatsCard.js'

function CatsContainer(props){
    let cats = () => {
        if(props.allCats.length === 0){
            return(
                <h1>
                    Loading 
                </h1>
            )
        }
        else{
            return props.allCats.map(cat => {return <CatsCard key={cat.id} name={cat.name} img={cat.img} />})
        }
    } 
    return(
        <>
        <div className="grid-container">
          {cats()}  
        </div>
        </>
    )
}

export default CatsContainer