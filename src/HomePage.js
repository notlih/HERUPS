import React, { Component, Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
import Banner from './containers/Interior/Banner';
import Feature from './containers/Interior/Feature';
import AboutUs from './resourceContainers/Interior/AboutUs';
import Login from './resourceContainers/Interior/Login';
import Team from './containers/Interior/Team';
import Testimonial from './containers/Interior/Testimonial';
import Footer from './containers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './containers/Interior/interior.style';

export default class HomePage extends Component{

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
                  <Banner />
                  <Feature />
                  <Login/>
                  <AboutUs />
                  <Team />
                  <Testimonial />
                  <Modal/>
                </ContentWrapper>
                <Footer />
                <Modal />
              </InteriorWrapper>
              {/* End of markup section. */}
            </Fragment>
          </ThemeProvider>
        );
    }
    
}