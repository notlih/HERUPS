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

import { newsData } from '../../../common/src/data/Interior';

const News = () => {
  return (
    <SectionWrapper id="news">
      <ContentWrapper>
        <div className="row">
          <div className="col">
            <Fade delay={30}>H</Fade>
          </div>
          <div className="col">
            <Fade delay={60}>E</Fade>
          </div>
          <div className="col">
            <Fade delay={90}>L</Fade>
          </div>
          <div className="col">
            <Fade delay={90}>P</Fade>
          </div>
        </div>
        <NewsWrapper>
          {newsData.map(item => (
            <NewsItem key={`news_key${item.id}`}>
              <Fade bottom delay={60 * item.id}>
                <Heading as="h2" content={item.title} />
                <Text content={item.excerpt} />
                <Link smooth to={item.link_url} className="read_more__btn">
                  <span className="arrow"></span>
                  <span className="text">{item.link_text}</span>
                </Link>
              </Fade>
            </NewsItem>
          ))}
        </NewsWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default News;
