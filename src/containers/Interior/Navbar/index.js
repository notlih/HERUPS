import React, { useContext, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import { Icon } from 'react-icons-kit';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import NavbarWrapper from '../../../common/src/components/Navbar';
import Drawer from '../../../common/src/components/Drawer';
import Button from '../../../common/src/components/Button';
import Logo from '../../../common/src/components/UIElements/Logo';
import HamburgMenu from '../../../common/src/components/HamburgMenu';
import ScrollSpyMenu from '../../../common/src/components/ScrollSpyMenu';
import { DrawerContext } from '../../../common/src/contexts/DrawerContext';
import { Container } from './navbar.style';
import Copyright from '../Copyright';

import { menuData } from '../../../common/src/data/Interior';
import logo from '../../../common/src/assets/image/interior/avocado.png';
import LoginModal from '../LoginModal';

import {useAuth} from "../../../common/src/hooks/use-auth.js"

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);


const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const auth = useAuth();


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

  const handleSignOut = () => {
    auth.signout();
  }


  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  let pathnameRedirect = "/dashboard/";
  if (auth.user){
    pathnameRedirect = pathnameRedirect + auth.user.displayName
  }

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/HERUPS"
          logoSrc={logo}
          title="HERUPS"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
        
          <Link to="/resources">
            <Button
              // as="a"
              // href="/resources"
              variant="textButton"
              aria-label="resources button"
              title="Resources"
            />
          </Link>
          <Button
            as="a"
            href="/mentors"
            variant="textButton"
            aria-label="Mentor button"
            title="Mentors"
          />
          {auth.user ? 
            (<Link to={{
            pathname: pathnameRedirect,
            }}>
              <Button
              variant="textButton"
              icon={<i className="flaticon-user" />}
              aria-label="Your Resources button"
              />
            </Link>) : 
            (<Button
            variant="textButton"
            onClick={handleLoginModal}
            icon={<i className="flaticon-user" />}
            aria-label="registration button"
            />)}
          {auth.user ? (
            <Button
              variant="textButton"
              onClick={handleSignOut}
              title="Sign Out"
              aria-label="registration button"
            />
            ):null} 
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <button
              type="button"
              className={state.isOpen ? 'active' : ''}
              onClick={toggleHandler}
              aria-label="drawer toggle button"
            >
              <Icon icon={androidClose} />
            </button>
            <ScrollSpyMenu
              menuItems={menuData}
              drawerClose={true}
              offset={-100}
            />
            <Copyright />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
