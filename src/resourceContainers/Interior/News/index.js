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
import Img1 from '../../../common/src/assets/image/interior/First Generation.jpg';

import { Container } from '../Banner/banner.style';


const News = () => {
  return (
    <SectionWrapper id="help">
      <Container>
        <ContentWrapper>
          <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
            <div style={{maxWidth:"800px", padding:"30px"}}>
              <Heading as="H1" content="All Available Resources"/>
              <Text content="Here you will find all of the resources that we have available for students like you. The resources are all split into different identifiers for your assistance. These identifiers include First Generation Students, Low Income Students, Undocumented Students, and Students of Color."/>
            </div>
            <img src={Img1} style={{height:"500px", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
