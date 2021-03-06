import React, { Component, Fragment } from 'react';

import { Container } from '../../../containers/Interior/Navbar/navbar.style';
import Heading from '../../../common/src/components/Heading';

import LoginModal from '../../../containers/Interior/LoginModal'
import { openModal, closeModal } from '@redq/reuse-modal';
import {useAuth} from '../../../common/src/hooks/use-auth'
import { Link } from "react-router-dom";
import Button from '../../../common/src/components/Button';

const Login = () => {
    const auth = useAuth();

    const CloseModalButton = () => (
      <Button
        className="modalCloseBtn"
        variant="fab"
        onClick={() => closeModal()}
        icon={<i className="flaticon-plus-symbol" />}
      />
    );
    
    const handleLoginModal = () => {
      console.log("LOGIN MODAL OPEN")
      openModal({
        config: {
          className: 'login-modal',
          disableDragging: true,
          width: '100%',
          height: '100%',
          animationFrom: { transform: 'translateY(100px)' },
          animationTo: { transform: 'translateY(0)' },
          transition: {
            mass: 1,
            tension: 180,
            friction: 26,
          },
        },
        component: LoginModal,
        componentProps: {},
        closeComponent: CloseModalButton,
        closeOnClickOutside: true,
      });
    };

    let pathnameRedirect = "/dashboard/";
    if (auth.user){
      pathnameRedirect = pathnameRedirect + auth.user.displayName
    }

    return (
        <Container style={{height:"200px", backgroundColor:"#F2E93D"}}>
            {auth.user ? 
            (
            <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              <Heading as="H1" content="Access your personalized resources page"/>
              <div>
                <Link to={{
                  pathname: pathnameRedirect,
                  }}>
                    <Button style={{backgroundColor:"#0274be", borderRadius: "5px"}}
                    variant="secondary"
                    title="Your Resources"
                    aria-label="Your Resources button"
                    />
                </Link>
              </div>
            </div>
            ):(
              <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Heading as="H1" content="Log in or create an account to get access to personalized resources and ability to add them to your favorites!"/>
                <Button
                    style={{backgroundColor:"#0274be", borderRadius: "5px"}}
                    variant="secondary"
                    title="Login / Register"
                    onClick={handleLoginModal}
                    aria-label="registration button"
                />
              </div>)}
        </Container>
    )

}

export default Login;