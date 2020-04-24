import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

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

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

export const useAuth = () => {
    return useContext(authContext)
};

function useProvideAuth(){
    const [user, setUser] = useState();

    const logIn = (email, password) => {
        return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(response => {
                    setUser(response.user)
                    return [response.user, 0]
                }).catch(error => {
                  return [0, error.code]
                });    
    }

    const signUp = (email, password, nameR) => {

        let userRef = firebase.database().ref('users/' + nameR);
        userRef.transaction(function(currentData){

            if(currentData === null){
                return {
                    username: nameR,
                    email: email,
                } 
            } else {
                return;
            }
        }, function(error, commited){
            if(error){
            }else if(!commited){
                return "Display Name already in use, please choose another or LOG IN";
            } else{


                return firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {

                    response.user.updateProfile({
                        displayName: nameR,
                    })

                    setUser(response.user);
                    return(response.user);
                });
            }

        })

        
    }

    const signout = () => {
        return firebase
          .auth()
          .signOut()
          .then(() => {
            setUser(false);
          });
      };
    
      const sendPasswordResetEmail = email => {
        return firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            return true;
          });
      };
    
      const confirmPasswordReset = (code, password) => {
        return firebase
          .auth()
          .confirmPasswordReset(code, password)
          .then(() => {
            return true;
          });
      };

      useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          if (user) {
            setUser(user);
          } else {
            setUser(false);
          }
        });


        // Cleanup subscription on unmount
        return () => unsubscribe();
      }, []);

    return{
        user,
        logIn,
        signUp,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    }
}