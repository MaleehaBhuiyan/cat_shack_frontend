import React from 'react'

class Cats extends React.Component{
    render(){
        return(
            <>
            <div className="catCard">
              <img src={this.props.img} width="150" height="175" />
              <h4>{this.props.name}</h4>
            </div>
            </>
        )
    }
}

export default Cats