import React, { Fragment, useState , useEffect } from 'react';
import { Redirect } from "react-router-dom";

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
import {
  TeamCard,
  SectionWrapper,
  ImageWrapper as TeamImageWrapper,
  TextWrapper as TeamTextWrapper,
  CarouselWrapper,
} from './team.style';

import {useAuth} from  "../../../common/src/hooks/use-auth.js"


import { SectionHeader } from '../interior.style';



const Project = () => {

  const glideOptions = {
    type: 'carousel',
    perView: 4,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30,
      },
      767: {
        perView: 2,
        gap: 30,
      },
      480: {
        perView: 1,
      },
    },
  };

  const imgSRC = "https://pbs.twimg.com/profile_images/1115302853273313280/hWZpEBHB_400x400.png"


  const auth = useAuth();

  const [firstGen, setFirstGen] = useState(false);
  const [FGResourceContainer, setFGResourceContainer] = useState(<div></div>)
  const [lowIncome, setLowIncome] = useState(false);
  const [LIResourceContainer, setLIResourceContainer] = useState(<div></div>)
  const [undoc, setUndoc] = useState(false);
  const [UResourceContainer, setUResourceContainer] = useState(<div></div>)
  const [studentOfColor, setStudentOfColor] = useState(false);
  const [SOCResourceContainer, setSOCResourceContainer] = useState(<div></div>)
  const [immigrant, setImmigrant] = useState(false);
  const [IResourceContainer, setIResourceContainer] = useState(<div></div>)
  const [pronouns, setPronouns] = useState("");
  const [education, setEducation] = useState("")

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

  useEffect(() => {
    if(immigrant){
      console.log("immigrant")
      getIResources();
    }
  }, [immigrant])


  function getFGResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=First-generation")
      .then(response => {
        return response.json();
      })
      .then(resources => {

        let newResources = {
          list: {},
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
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Low-income")
    .then(response => {
      return response.json();
    })
    .then(resources => {

      let newResources = {
        list: {},
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
        list: {},
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
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Person%20of%20color")
      .then(response => {
        return response.json();
      })
      .then(resources => {

        let newResources = {
          list: {},
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

  function getIResources(){
    fetch("https://fresh-avocado-2020.herokuapp.com/resources?q=Immigrant")
      .then(response => {
        return response.json();
      })
      .then(resources => {

        let newResources = {
          list: {},
          category: "Resources for Immigrants"
        }
        for (let i = 0; i < resources.length; i++){
          newResources.list[i] = resources[i] 
        }
        console.log(newResources)
        setIResourceContainer(setCarousel(newResources))

      });
  }

  function setCarousel(resources){
    let resourceList = resources.list;
    let category = resources.category;
    let description = resources.description;

    let div = [];

    console.log(category)
    Object.keys(resourceList).forEach(r => {
      console.log(resourceList[r])
      let items = (
        <GlideSlide key={`project_key${resourceList[r].Resource}`}>
          <TeamCard className="team_card">
            <TeamImageWrapper className="image_wrapper">
              <Image src={imgSRC} alt={category} />
            </TeamImageWrapper>
            <TeamTextWrapper className="text_wrapper">
              <div className="name_plate">
                <Heading as="h4" content={resourceList[r].Resource} />
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                  <Text content="Learn More"/>
                  <Text content="Favorite"/>
                </div>
              </div>
            </TeamTextWrapper>
          </TeamCard>
        </GlideSlide>)
        div.push(items)
    })

    return(
      <SectionWrapper id="team">
        <Container width="1360px">
          <SectionHeader>
            <Heading as="h2" content={category} />
            <Text content={description} />
          </SectionHeader>
          <CarouselWrapper>
            {
              <GlideCarousel
                carouselSelector="team_carousel"
                options={glideOptions}
                nextButton={<span className="next_arrow" />}
                prevButton={<span className="prev_arrow" />}
              >
                <Fragment>
                  {div.map(item => <Container>{item}</Container>)}              
                </Fragment>
              </GlideCarousel>
            }
          </CarouselWrapper>
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
    setImmigrant(snapshot.val().immigrantStatus);
    setEducation(snapshot.val().education);
    setLowIncome(snapshot.val().lowIncomeStatus);
    setStudentOfColor(snapshot.val().studentOfColorStatus);
    setUndoc(snapshot.val().undocStatus);
    setPronouns(snapshot.val().pronoun);
  })

 

  return (
    <SectionWrapper>
      <Container width="1360px">
        <Container>
          {FGResourceContainer}
          {LIResourceContainer}
          {UResourceContainer}
          {SOCResourceContainer}
          {IResourceContainer}
        </Container>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
