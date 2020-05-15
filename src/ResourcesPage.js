import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
import FirstGen from './resourceContainers/Interior/FirstGenResources';
import PersonOfColor from './resourceContainers/Interior/Project1';
import LowIncome from './resourceContainers/Interior/Project2';
import Undocumented from './resourceContainers/Interior/Project3';

import Login from './resourceContainers/Interior/Login';
import News from './resourceContainers/Interior/News';
import Footer from './resourceContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './resourceContainers/Interior/interior.style';


export default class ResourcesPage extends Component{

    render(){

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
                <News />
                <Login />
                <FirstGen />
                <LowIncome />
                <Undocumented />
                <PersonOfColor />
                <Modal/>
              </ContentWrapper>
              <Footer />
            </InteriorWrapper>
            {/* End of markup section. */}
          </Fragment>
        </ThemeProvider>
      );
    }
    
}