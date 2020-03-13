import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './appsContainers/Interior/Navbar';
import AboutUs from './appsContainers/Interior/AboutUs';
import Footer from './appsContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './appsContainers/Interior/interior.style';

export default class Applications extends Component{

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
                  <AboutUs />
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