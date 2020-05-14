import React, { Fragment, useState , useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

import Fade from 'react-reveal/Fade';
import Text from '../../../common/src/components/Text';
import Heading from '../../../common/src/components/Heading';
import Image from '../../../common/src/components/Image';
import Container from '../../../common/src/components/UI/Container';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../interior.style';


import Button from '../../../common/src/components/Button';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from '../team.style';
import loadingIMG from "../../../common/loadingGIF.gif"
const Project = () => {
  const [SOCResourceContainer, setSOCResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);


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

  return (
    <SectionWrapper id="first-gen">
      <Container width="1360px">
        {SOCResourceContainer}
        <Link to={"/resources/Student-of-Color/"}>
          <Button  className="allButton"            
            title="All Student of Color Resources"/>
        </Link>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
