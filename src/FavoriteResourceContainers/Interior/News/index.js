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

import Background from '../../../common/resources2.png';

const News = () => {
  return (
    <SectionWrapper id="help" style={{padding:"100px 0", backgroundImage: "url(" + Background + ")", backgroundPosition:"center", backgroundSize: "cover", boxShadow: "inset 0 0 0 2000px rgba(2, 116, 190, 0.7)"}}>
      <SectionHeader >
        <ContentWrapper >
            
          <Heading as="h1" style={{color:"white"}} className="title" content="Your Favorited Resources"/>
          <hr style={{width:"200px"}}></hr>
        </ContentWrapper>
      </SectionHeader>
    </SectionWrapper>
  );
};

export default News;
