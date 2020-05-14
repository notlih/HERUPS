import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
// import Banner from './resourceContainers/Interior/Banner';
// import Feature from './resourceContainers/Interior/Feature';
import AboutUs from './SOCResourceContainers/Interior/AboutUs';
import FirstGen from './SOCResourceContainers/Interior/FirstGenResources';
import PersonOfColor from './SOCResourceContainers/Interior/Project1';
import LowIncome from './SOCResourceContainers/Interior/Project2';
import Undocumented from './SOCResourceContainers/Interior/Project3';

// import Team from './resourceContainers/Interior/Team';
import News from './SOCResourceContainers/Interior/News';
// import Testimonial from './resourceContainers/Interior/Testimonial';
// import Newsletter from './resourceContainers/Interior/Newsletter';
import Footer from './SOCResourceContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './SOCResourceContainers/Interior/interior.style';

export default class SOCResourcesPage extends Component{

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
                  <PersonOfColor />
                </ContentWrapper>
                <Footer />
              </InteriorWrapper>
              {/* End of markup section. */}
            </Fragment>
          </ThemeProvider>
        );
    }
    
}