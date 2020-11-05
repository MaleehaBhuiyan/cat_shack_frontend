import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import CatPage from './Page/CatPage'
import HomePage from './Page/HomePage'
import Navbar from './Components/Navbar'

class App extends React.Component{
  render(){
    return(
      <>
      <Navbar />
      <Switch>
        <Route path="/cats" render={() => <CatPage /> } />
        <Route path="/home" render={() => <HomePage /> } />
      </Switch>
      </>
    )
  }
}

export default withRouter(App);
