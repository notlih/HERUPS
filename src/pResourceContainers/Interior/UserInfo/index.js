import React, {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";

import firebase from "firebase"
import "firebase/database"

import Fade from 'react-reveal/Fade';
import Heading from '../../../common/src/components/Heading';
import BlogPost from '../../../common/src/components/BlogPost';
import Container from '../../../common/src/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import { userData } from '../../../common/src/data/Interior';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"



const Feature = () => {
  const { slogan, features } = userData;

  const [firstGen, setFirstGen] = useState(false);
  const [lowIncome, setLowIncome] = useState(false);
  const [undoc, setUndoc] = useState(false);
  const [studentOfColor, setStudentOfColor] = useState(false);
  const [immigrant, setImmigrant] = useState(false);
  const [pronouns, setPronouns] = useState("");
  const [education, setEducation] = useState("")
  const auth = useAuth();

  if(!auth.user){
    return(
      <Redirect to={{
        pathname: "/",
      }}/>
    )
  }

  console.log(auth.user)

  const greeting = "Greetings, " + auth.user.displayName;

    firebase.database().ref("/users/" + auth.user.displayName).once('value').then(function(snapshot){
      setFirstGen(snapshot.val().firstGenStatus);
      setImmigrant(snapshot.val().immigrantStatus);
      setEducation(snapshot.val().education);
      setLowIncome(snapshot.val().lowIncomeStatus);
      setStudentOfColor(snapshot.val().studentOfColorStatus);
      setUndoc(snapshot.val().undocStatus);
      setPronouns(snapshot.val().pronoun);
  })

  let firstGenIntro = <div></div>;
  if(firstGen){
    firstGenIntro = <Heading as="p" color="BLACK" content="A First Generation Student"/>
  }

  let immigrantIntro = <div></div>;
  if(immigrant){
    immigrantIntro = <Heading as="p" color="BLACK" content="An Immigrant Student"/>
  }

  let lowIncomeIntro = <div></div>;
  if(lowIncome){
    lowIncomeIntro = <Heading as="p" color="BLACK" content="A Student of Low Income"/>
  }

  let SOCIntro = <div></div>;
  if(studentOfColor){
    SOCIntro = <Heading as="p" color="BLACK" content="A Student of Color"/>
  }

  let undocIntro = <div></div>;
  if(undoc){
    SOCIntro = <Heading as="p" color="BLACK" content="A Student of Undocumented Status"/>
  }

  let pronounsIntro = <Heading as="p" color="BLACK" content={"With Prefered Pronouns: " + pronouns}/>;

  let educationIntro = <Heading as="p" color="BLACK" content={"And Interested in Studying: " + education}/>;

  return (
    <SectionWrapper id="user">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h1" content={greeting} />
          <Heading as="h2" content={"You are "} />
            {firstGenIntro}
            {immigrantIntro}
            {lowIncomeIntro}
            {SOCIntro}
            {undocIntro}
            {pronounsIntro}
            {educationIntro}
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
