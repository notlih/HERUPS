import React, {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import Heading from '../../../common/src/components/Heading';
import Container from '../../../common/src/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"


const Feature = () => {

  const auth = useAuth();

  if(!auth.user){
    return(
      <Redirect to={{
        pathname: "/",
      }}/>
    )
  }

  const greeting = "Hello, " + auth.user.displayName;

  return (
    <SectionWrapper id="user">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h1" style={{textDecoration: "underline", textAlign: "start", paddingLeft: "50px"}} content={greeting} />
          <Heading as="h2" style={{textAlign: "start", paddingLeft: "50px", color:"black"}} content={"Here are some resources tailored to your needs!"} />
        </SectionHeader>
        <Container>

        </Container>
      </Fade>
    </SectionWrapper>
  );
};

export default Feature;
