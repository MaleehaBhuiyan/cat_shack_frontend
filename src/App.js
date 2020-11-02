import React from 'react'
import './App.css';
import CatPage from './Page/CatPage'
import Navbar from './Components/Navbar'

class App extends React.Component{
  render(){
    return(
      <>
      <Navbar />
      <CatPage />
      </>
    )
  }
}

export default App;
