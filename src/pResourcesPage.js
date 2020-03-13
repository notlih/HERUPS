import React, { Component, Fragment, useState } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
// import Banner from './pResourceContainers/Interior/Banner';
import UserInfo from './pResourceContainers/Interior/UserInfo';
import UserResources from './pResourceContainers/Interior/UserResources';
import Identify from './pResourceContainers/Interior/Identify';
import Footer from './pResourceContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './pResourceContainers/Interior/interior.style';

const pResourceContainers = () => {
   
  return(
      <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <UserInfo/>
            <Identify/>
            <UserResources/>
            <Modal/>
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );


}
    
export default pResourceContainers;