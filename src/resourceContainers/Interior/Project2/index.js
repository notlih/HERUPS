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
  const [LIResourceContainer, setLIResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);

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
        {LIResourceContainer}
        <Link to={"/resources/Low-Income/"}>
          <Button className="allButton"
            title="All Low Income Resources"/>
        </Link>
      </Container>
    </SectionWrapper>
  );
};

export default Project