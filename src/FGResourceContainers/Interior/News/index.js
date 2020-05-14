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
            
          <Heading as="H1" className="title" content="First Generation Student Resources"/>
        
          <Text content="People who come from families where they will be the first person from their family to pursue higher education." />   
         
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
