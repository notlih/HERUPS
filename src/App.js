import React, {Component, useState, useEffect} from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashRouter } from "react-router-dom";
import pResourcesPage from './pResourcesPage';

import {ProvideAuth} from "./common/src/hooks/use-auth.js"

export default class App extends Component{

  render(){
    return (
      <ProvideAuth>
        <div id="wholeApp">
          <HashRouter >
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/resources' exact component={ResourcesPage}/>
              <Route path='/dashboard' component={pResourcesPage}/>
              <Route path='/yourResources' component={pResourcesPage}/>
            </Switch>
          </HashRouter>
        </div>
      </ProvideAuth>
    )};

}