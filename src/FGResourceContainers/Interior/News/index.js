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

import { SectionHeader, Container } from '../Banner/banner.style';

import Background from '../../../common/resources.jpg';

const News = () => {
  return (
    <SectionWrapper id="help" style={{padding:"100px 0", backgroundImage: "url(" + Background + ")", backgroundPosition:"center", backgroundSize: "cover", boxShadow: "inset 0 0 0 2000px rgba(255, 192, 77, 0.7)"}}>
      <SectionHeader >
        <ContentWrapper >
            
          <Heading as="h1" style={{color:"white"}} className="title" content="First Generation Student Resources"/>
          <hr style={{width:"200px"}}></hr>
          <Heading as="h3" style={{color:"white"}} content="People who come from families where they will be the first person from their family to pursue higher education. BE PROUD!" />   
         
        </ContentWrapper>
      </SectionHeader>
    </SectionWrapper>
  );
};

export default News;
