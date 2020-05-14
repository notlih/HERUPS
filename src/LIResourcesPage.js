import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
// import Banner from './resourceContainers/Interior/Banner';
// import Feature from './resourceContainers/Interior/Feature';
import AboutUs from './LIResourceContainers/Interior/AboutUs';
import FirstGen from './LIResourceContainers/Interior/FirstGenResources';
import PersonOfColor from './LIResourceContainers/Interior/Project1';
import LowIncome from './LIResourceContainers/Interior/Project2';
import Undocumented from './LIResourceContainers/Interior/Project3';

// import Team from './resourceContainers/Interior/Team';
import News from './LIResourceContainers/Interior/News';
// import Testimonial from './resourceContainers/Interior/Testimonial';
// import Newsletter from './resourceContainers/Interior/Newsletter';
import Footer from './LIResourceContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './LIResourceContainers/Interior/interior.style';

export default class LIResourcesPage extends Component{

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
                  <LowIncome />
                </ContentWrapper>
                <Footer />
              </InteriorWrapper>
              {/* End of markup section. */}
            </Fragment>
          </ThemeProvider>
        );
    }
    
}