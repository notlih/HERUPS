import React, { Component, useState } from 'react';
import firebase from 'firebase/app';
import "firebase/database"
import UserResources from "./UserResources"

export default class UserDashboard extends Component{
    render(){
    
        return (
            <UserResources state={this.props.location.state}/>
        )
    }
}