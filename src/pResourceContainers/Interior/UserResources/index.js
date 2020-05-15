import React, { Fragment, useState , useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

import firebase from "firebase"
import "firebase/database"

import Fade from 'react-reveal/Fade';
import Button from '../../../common/src/components/Button';
import Heading from '../../../common/src/components/Heading';
import Image from '../../../common/src/components/Image';
import Container from '../../../common/src/components/UI/Container';
import Text from '../../../common/src/components/Text';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from './team.style';

import loadingIMG from "../../../common/loadingGIF.gif"

import {useAuth} from  "../../../common/src/hooks/use-auth.js"

import { SectionHeader } from '../interior.style';

const Project = () => {

  const auth = useAuth();

  const [firstGen, setFirstGen] = useState(false);
  const [FGResourceContainer, setFGResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);
  const [lowIncome, setLowIncome] = useState(false);
  const [LIResourceContainer, setLIResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);
  const [undoc, setUndoc] = useState(false);
  const [UResourceContainer, setUResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);
  const [studentOfColor, setStudentOfColor] = useState(false);
  const [SOCResourceContainer, setSOCResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);

  const [pronouns, setPronouns] = useState("");
  const [education, setEducation] = useState("");


  useEffect(() => {
    if(firstGen){
      console.log("first gen")
      getFGResources();
    }
  }, [firstGen]);

  useEffect(() => {
    if(lowIncome){
      console.log("low income")
      getLIResources();
    }
  }, [lowIncome])

  useEffect(() => {
    if(undoc){
      console.log("undoc")
      getUResources();
    }
  }, [undoc]);

   useEffect(() => {
    if(studentOfColor){
      console.log("student of color")
      getSOCResources();
    }
   }, [studentOfColor])



  function getFGResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=First%20Generation")
      .then(response => {
        return response.json();
      })
      .then(resources => {

        let newResources = {
          list: [],
          category: "First Generation Resources",
          description: "People who come from families where they will be the first person from their family to pursue higher education. BE PROUD!",
        }
        for (let i = 0; i < resources.length; i++){
          newResources.list[i] = resources[i] 
        }
        console.log(newResources)
        setFGResourceContainer(setCarousel(newResources))
      });
  }

  function getLIResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Low%20Income")
    .then(response => {
      return response.json();
    })
    .then(resources => {

      let newResources = {
        list: [],
        category: "Low Income Resources",
        description: "Those who come from a low-income background or family. NO COST TO YOU"
      }
      for (let i = 0; i < resources.length; i++){
        newResources.list[i] = resources[i] 
      }
      console.log(newResources)
      setLIResourceContainer(setCarousel(newResources))

    });
  }

  function getUResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Undocumented")
    .then(response => {
      return response.json();
    })
    .then(resources => {

      let newResources = {
        list: [],
        category: "Resources for Undocumented Immigrants",
        description: "Those who are not documented as citizens in this country often find themselves scraping for educational resources, some of which require you to be a citizen. WE'VE GOT YOUR BACK"
      }
      for (let i = 0; i < resources.length; i++){
        newResources.list[i] = resources[i] 
      }
      console.log(newResources)
      setUResourceContainer(setCarousel(newResources))

    });
  }

  function getSOCResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Person%20of%20Color")
      .then(response => {
        return response.json();
      })
      .then(resources => {

        let newResources = {
          list: [],
          category: "Resources for Students of Color",
          description: "Students who self-identify as non-white, referred to some as ethnic \"minority\" students. Students of color may be underprivileged, and/or be marginalized by institutions/policies. WE'RE WITH YOU"
        }
        for (let i = 0; i < resources.length; i++){
          newResources.list[i] = resources[i] 
        }
        console.log(newResources)
        setSOCResourceContainer(setCarousel(newResources))

      });
  }

  function setCarousel(resources){
    let resourceList = resources.list;
    let category = resources.category;
    let description = resources.description;

    let div = [];

    console.log(resourceList)

    resourceList.map((item, i) => {
      let items = (
        <GlideSlide key={`project_key${item.Resource}`}>
          <TeamCard className="team_card">
            <ImageWrapper className="image_wrapper">
              <Image src={item.ResourceImg} alt={category} />
            </ImageWrapper>
            <TextWrapper className="text_wrapper">
              <div className="name_plate">
                <Heading as="h3" content={item.Resource}/>
              </div>
            </TextWrapper>
          </TeamCard>
        </GlideSlide>
      )       
      div.push(items)
    }) 

    return(
      <SectionWrapper id="team">
      <Container width="1360px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h2" content={category} />
            <Text content={description} />
          </SectionHeader>
        </Fade>
        <Fade bottom delay={30}>
          <CarouselWrapper>
            {
              
                <Fragment>
                  {div.slice(0, 3).map(item => <Container>{item}</Container>)}              
                </Fragment>
            }
            </CarouselWrapper>
            </Fade>
          </Container>
        </SectionWrapper>)
  }

  if(!auth.user){
    return(
      <Redirect to={{
        pathname: "/",
      }}/>
    )
  }

  firebase.database().ref("/users/" + auth.user.displayName).once('value').then(function(snapshot){
    setFirstGen(snapshot.val().firstGenStatus);
    setEducation(snapshot.val().education);
    setLowIncome(snapshot.val().lowIncomeStatus);
    setStudentOfColor(snapshot.val().studentOfColorStatus);
    setUndoc(snapshot.val().undocStatus);
    setPronouns(snapshot.val().pronoun);
  })

 

  return (
    <SectionWrapper>
      <Container>
        <Container>
          {FGResourceContainer}
          <Link to={"/resources/First-Gen/"}>
            <Button className="allButton"            
              title="All First Gen. Resources"
              style={{marginBottom:"40px"}}/>
          </Link>

          <hr/>

          {LIResourceContainer}
          <Link to={"/resources/Low-Income/"}>
            <Button className="allButton"
              title="All Low Income Resources"
              style={{marginBottom:"40px"}}/>
          </Link>

          <hr/>

          {UResourceContainer}
          <Link to={"/resources/Undocumented/"}>
            <Button className="allButton"
              title="All Undocumented Student Resources"
              style={{marginBottom:"40px"}}/>
          </Link>

          <hr/>

          {SOCResourceContainer}
          <Link to={"/resources/Student-of-Color/"}>
            <Button  className="allButton"            
              title="All Student of Color Resources"
              style={{marginBottom:"40px"}}/>
          </Link>

        </Container>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
