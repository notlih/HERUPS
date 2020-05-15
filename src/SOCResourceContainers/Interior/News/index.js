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
            
          <Heading as="h1" style={{color:"white"}} className="title" content="Resources for Students of Color"/>
          <hr style={{width:"200px"}}></hr>
          <Heading as="h3" style={{color:"white"}} content={"Students who self-identify as non-white, referred to some as ethnic 'minority' students. Students of color may be underprivileged, and/or be marginalized by institutions/policies. WE'RE WITH YOU"} />   
         
        </ContentWrapper>
      </SectionHeader>
    </SectionWrapper>
  );
};

export default News;
