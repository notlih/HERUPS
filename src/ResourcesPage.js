import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './resourceContainers/Interior/Navbar';
// import Banner from './resourceContainers/Interior/Banner';
import Feature from './resourceContainers/Interior/Feature';
import AboutUs from './resourceContainers/Interior/AboutUs';
import Project from './resourceContainers/Interior/Project';
import Team from './resourceContainers/Interior/Team';
import News from './resourceContainers/Interior/News';
import Testimonial from './resourceContainers/Interior/Testimonial';
import Gallery from './resourceContainers/Interior/Gallery';
import Newsletter from './resourceContainers/Interior/Newsletter';
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
                  <Gallery />
                  <Feature />
                  <AboutUs />
                  <Project />
                  <Team />
                  <Testimonial />
                  <Newsletter />
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