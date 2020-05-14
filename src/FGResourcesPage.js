import React, { Component, Fragment } from 'react';
import {Modal} from '@redq/reuse-modal';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from './common/src/theme/interior';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import Navbar from './containers/Interior/Navbar';
// import Banner from './resourceContainers/Interior/Banner';
// import Feature from './resourceContainers/Interior/Feature';
import AboutUs from './FGResourceContainers/Interior/AboutUs';
import FirstGen from './FGResourceContainers/Interior/FirstGenResources';
import PersonOfColor from './FGResourceContainers/Interior/Project1';
import LowIncome from './FGResourceContainers/Interior/Project2';
import Undocumented from './FGResourceContainers/Interior/Project3';

// import Team from './resourceContainers/Interior/Team';
import News from './FGResourceContainers/Interior/News';
// import Testimonial from './resourceContainers/Interior/Testimonial';
// import Newsletter from './resourceContainers/Interior/Newsletter';
import Footer from './FGResourceContainers/Interior/Footer';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from './FGResourceContainers/Interior/interior.style';

export default class FGResourcesPage extends Component{

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
                  <FirstGen />
                </ContentWrapper>
                <Footer />
              </InteriorWrapper>
              {/* End of markup section. */}
            </Fragment>
          </ThemeProvider>
        );
    }
    
}