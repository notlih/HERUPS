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
// import SectionWrapper, {
//   ProjectWrapper,
//   TextWrapper,
//   ImageWrapper,
// } from './project.style';

import Button from '../../../common/src/components/Button';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from '../team.style';
import loadingIMG from "../../../common/loadingGIF.gif"



const Project = () => {
  const [FGResourceContainer, setFGResourceContainer] = useState(<div><img src={loadingIMG}/><br/></div>);


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
        {FGResourceContainer}
        <Link to={"/resources/First-Gen/"}>
          <Button className="allButton"            
            title="All First Gen. Resources"/>
        </Link>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
