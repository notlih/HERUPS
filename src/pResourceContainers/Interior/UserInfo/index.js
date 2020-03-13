import React from 'react';
import { Redirect } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import Heading from '../../../common/src/components/Heading';
import BlogPost from '../../../common/src/components/BlogPost';
import Container from '../../../common/src/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import { userData } from '../../../common/src/data/Interior';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"


const Feature = () => {
  const { title, slogan, features } = userData;
  const auth = useAuth();

  if(!auth.user){
    return(
      <Redirect to={{
        pathname: "/",
      }}/>
    )
  }
  return (
    <SectionWrapper id="user">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h1" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <FeatureWrapper>
            {features.map(item => (
              <BlogPost
                key={`user_key${item.id}`}
                thumbUrl={item.icon}
                title={item.title}
                excerpt={item.description}
              />
            ))}
          </FeatureWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
