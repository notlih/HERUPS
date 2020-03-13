import React, { Component, useState } from 'react';
import firebase from 'firebase/app';
import "firebase/database"

export default class UserDashboard extends Component{
    render(){


        if (!this.props.location.state){
            return (
                <div>
                    <h1>You are not logged in</h1>
                </div>
            )
        }

        let user = this.props.location.state.user;

        firebase.database()
            .ref("users/" + user.displayName)
            .once("value")
            .then(function(snapshot){
                console.log(snapshot.val());
                
            })      
        return (
            <div>
                <h1>{user.displayName}</h1>
            </div>
        )
    }
}