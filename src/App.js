import React, {Component} from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class App extends Component{

  render(){
    return(
      <div id="wholeApp">
        <Router basename={process.env.PUBLIC_URL+'/'}>
          <Switch>
            <Route path='/' exact component={HomePage}/>
          </Switch>
        </Router>
      </div>
    );
  }

}