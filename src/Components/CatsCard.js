import React from 'react'

function CatsCard(props){   
    return(
        <>
        <div className="grid-item">
            <img className="catCardImg" src={props.img} alt=" " width="200" height="225" />
            <h4 className="catCardh4">{props.name}</h4>
        </div>
        </>
    )
    
}

export default CatsCard