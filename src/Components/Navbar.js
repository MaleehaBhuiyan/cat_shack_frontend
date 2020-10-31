import React from 'react'

const logo = require('../images/logo.png')

class Navbar extends React.Component{
    render(){
        return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
        {/*COME BACK TO FIXING THE NAVBAR*/}
        <a class="navbar-brand" href="index.html"> <img src={logo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="garden.html">Cats</a>
            <a class="nav-link" href="land.html">Adopt</a>
            <a class="nav-link" href="contact.html">User</a>
          </div>
        </div>
      </nav>
           </>
        )
    }
}

export default Navbar