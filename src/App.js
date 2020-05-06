import React, {Component, useState, useEffect} from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashRouter } from "react-router-dom";
import pResourcesPage from './pResourcesPage';
import pStatementsPage from './pStatementsPage';
import EventsPage from './EventsPage';
import ApplicationsPage from './ApplicationsPage';
import GenderResourcesPage from './GenderResourcesPage';
import FinAidPage from './FinAidPage';

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
              <Route path='/dashboard/:id/resources/Low-Income' exact component={ResourcesPage}/>
              <Route path='/dashboard/:id/resources/First-Gen' exact component={ResourcesPage}/>
              <Route path='/dashboard/:id/resources/Undocumented' exact component={ResourcesPage}/>
              <Route path='/dashboard/:id/resources/Student-of-Color/' exact component={ResourcesPage}/>
              <Route path='/dashboard' component={pResourcesPage}/>
              <Route path='/PersonalStatements' component={pStatementsPage}/>
              <Route path='/Events' component={EventsPage}/>
              <Route path='/FinancialAid' component={FinAidPage}/>
              <Route path='/GenderResources' component={GenderResourcesPage}/>
              <Route path='/Applications' component={ApplicationsPage}/>
            </Switch>
          </HashRouter>
        </div>
      </ProvideAuth>
    )};

}