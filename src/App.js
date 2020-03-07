import React, {Component, useState, useEffect} from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
=======
import CircularProgress from '@material-ui/core'
import { CircleLoader } from './containers/Interior/interior.style';
import firebase from './common/firebase';

const [firebaseInitialized, setFirebaseInitialized] = useState(false)

useEffect(() => {
    firebase.isIntialized().then(val => {
      setFirebaseInitialized(val)
    })
})
>>>>>>> 955a760892c5711030600ba00c77e637f0dd4539

export default class App extends Component{

  // for local use:  
  render(){
    return firebaseInitialized != false ?(
      <div id="wholeApp">
        <HashRouter >
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/resources' exact component={ResourcesPage}/>
          </Switch>
        </HashRouter>
      </div>
    ) : <div id="loader"><CircularProgress></CircularProgress></div>
  }

}