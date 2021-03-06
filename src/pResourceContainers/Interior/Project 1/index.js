import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../../../common/src/components/Text';
import Heading from '../../../common/src/components/Heading';
import Image from '../../../common/src/components/Image';
import Container from '../../../common/src/components/UI/Container';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../interior.style';
import SectionWrapper, {
  ProjectWrapper,
  TextWrapper,
  ImageWrapper,
} from './project.style';

import { projectData1 } from '../../../common/src/data/Interior';

const Project = () => {
  const { title, slogan, thumb_url, projects } = projectData1;
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  return (
    <SectionWrapper id="low-income">
      <Container width="1360px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h5" content={title} />
            <Heading content={slogan} />
          </SectionHeader>
        </Fade>

        <ProjectWrapper>
          <GlideCarousel
            carouselSelector="project_carousel"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {projects.map(project => (
                <GlideSlide key={`project_key${project.id}`}>
                  <TextWrapper>
                    <Text content={project.text} />
                    <Text content={project.text2} />
                  </TextWrapper>
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>

          <ImageWrapper>
            <Image src={thumb_url} alt="Interiro landing by RedQ" />
          </ImageWrapper>
        </ProjectWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
