import React, {Component, useState, useEffect} from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CircularProgress from '@material-ui/core'
import { CircleLoader } from './containers/Interior/interior.style';
import firebase from './common/firebase';

const [firebaseInitialized, setFirebaseInitialized] = useState(false)

useEffect(() => {
    firebase.isIntialized().then(val => {
      setFirebaseInitialized(val)
    })
})

export default class App extends Component{

  render(){
    return firebaseInitialized != false ?(
      <div id="wholeApp">
        <Router basename={process.env.PUBLIC_URL+'/'}>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/resources' exact component={ResourcesPage}/>
          </Switch>
        </Router>
      </div>
    ) : <div id="loader"><CircularProgress></CircularProgress></div>
  }

}