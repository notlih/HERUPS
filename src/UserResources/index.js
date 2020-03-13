import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import "firebase/database"

const UserResources = ({
    state
}) => { 

    const [userAccount, setUserAccount] = useState({});
    const [userDetails, setUserDetails] = useState({});

    

    function retrieveUserDetails(){
        
    } 

    useEffect(async () => {

        if (!state){
            return (
                <div>
                    <h1>You are not logged in</h1>
                </div>
            )
        }

        setUserAccount(state.user);   
    
        retrieveUserDetails();

    })


    return (
        <div>
            {JSON.stringify(userAccount)}
            {JSON.stringify(userDetails)}
        </div>
    )


}

export default UserResources