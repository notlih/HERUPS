import React, { Component, Fragment } from 'react';

export default class UserDashboard extends Component{
    render(){

        let user = this.props.location.state.user;
        console.log(user);

        return(
            <div>
                <h1>{user.displayName}</h1>
            </div>
        )
    }
}