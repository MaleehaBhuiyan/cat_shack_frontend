import React from 'react'

class Cats extends React.Component{
    render(){
        return(
            <>
            {/* <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div> */}
            <div className="catCard" class="row">
            <div className="col-sm">
            <img src={this.props.img} width="200" height="225" />
            <h4>{this.props.name}</h4>
            </div>
            </div>
            </>
        )
    }
}

export default Cats