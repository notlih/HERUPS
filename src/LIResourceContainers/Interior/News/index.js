import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from '../../../common/src/components/Heading';
import Text from '../../../common/src/components/Text';
import { HashLink as Link } from 'react-router-hash-link';
import SectionWrapper, {
  ContentWrapper,
  NewsWrapper,
  NewsItem,
} from './news.style';

import { Container } from '../Banner/banner.style';

import { newsData } from '../../../common/src/data/Interior';

const News = () => {
  return (
    <SectionWrapper id="help">
      <Container>
        <ContentWrapper>
            
          <Heading as="H1" className="title" content="Low Income Student Resources"/>
        
          <Text content="Those who come from a low-income background or family. The guidelines for low-income are defined here. NO COST TO YOU" />   
         
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
