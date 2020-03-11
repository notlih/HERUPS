import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC6di1ZF_w-2JJLM7i87_yqrecjypoE-3Y",
    authDomain: "fre-sha-voca-do.firebaseapp.com",
    databaseURL: "https://fre-sha-voca-do.firebaseio.com",
    projectId: "fre-sha-voca-do",
    storageBucket: "fre-sha-voca-do.appspot.com",
    messagingSenderId: "243499719793",
    appId: "1:243499719793:web:c4c768f741bcdd42d64fd0",
    measurementId: "G-FMJX3HGGKV"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
