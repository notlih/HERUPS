import React, {Component, useState, useEffect} from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashRouter } from "react-router-dom";

export default class App extends Component{

  render(){
    return (
      <div id="wholeApp">
        <HashRouter >
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/resources' exact component={ResourcesPage}/>
          </Switch>
        </HashRouter>
      </div>
    )};

}