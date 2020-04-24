import React, { Fragment, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../../../common/src/components/Button';
import Heading from '../../../common/src/components/Heading';
import Image from '../../../common/src/components/Image';
import Container from '../../../common/src/components/UI/Container';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import { SectionHeader, CircleLoader } from '../interior.style';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from './team.style';

const Team = (props) => {

  const [resources, setResources] = useState({})

  useEffect(() => {
    console.log(props.newResources)
    setResources(props.newResources)
  }, [props.newResources])

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

  return (
    <SectionWrapper id="team">
      <Container width="1360px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h5" content={"category"} />
            <Heading content={"description"} />
          </SectionHeader>
        </Fade>
        <Fade bottom delay={30}>
          
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Team;
