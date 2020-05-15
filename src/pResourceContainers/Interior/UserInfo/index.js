import React, {useState, useEffect} from 'react';
import { Link, Redirect } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import Heading from '../../../common/src/components/Heading';
import Button from '../../../common/src/components/Button';
import Container from '../../../common/src/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"

import Background from './background.png';

const Feature = () => {

  const auth = useAuth();

  if(!auth.user){
    return(
      <Redirect to={{
        pathname: "/",
      }}/>
    )
  }

  let pathName = "/dashboard/" + auth.user.displayName +"/favorites";

  return (
    <SectionWrapper id="user" style={{backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>
      <Fade bottom>
        <SectionHeader >
          <Heading as="h1" style={{textAlign: "center", color:"#f7f7f7"}} content={"Hello, " + auth.user.displayName} />
          <hr style={{width:"200px"}}></hr>
          <Heading as="h2" style={{textAlign: "center", color:"#f7f7f7"}} content={"Here are some resources tailored to your needs!"} />
          <Link to={{pathname:pathName}}>
            <Button style={{marginTop:"20px"}} color={"black"} title="Your Favorites"/>
          </Link>
        </SectionHeader>
      </Fade>
    </SectionWrapper>
  );
};

export default Feature;
