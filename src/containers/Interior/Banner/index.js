import React, { Fragment, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from '../../../common/src/components/Heading';
import Text from '../../../common/src/components/Text';
import Image from '../../../common/src/components/Image';
import Button from '../../../common/src/components/Button';
import Input from '../../../common/src/components/Input';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from './banner.style';

import { bannerData } from '../../../common/src/data/Interior';

const Banner = () => {  
  const { discount, discountLabel, title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const [emailSent, setEmailSent] = useState(0);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    let value = '';
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        value = e;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = async (e) => {
    e.preventDefault();
    console.log("submitted");
    if (state.email.match(emailRegex)) {
    await fetch(`https://fresh-avocado-2020.herokuapp.com/email?q=${state.email}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              if (data.status.localeCompare("email exists") === 0){
                //email exists
                console.log("email exists");
                setEmailSent(2);
              } else {
                //email added
                console.log("email added");
                setEmailSent(1);
              }
            });
      setState({ email: '', valid: '' });
    }
  };

  var displayEmailUpdates = (
    <FormWrapper onSubmit={handleSubscriptionForm}>
    <Input
      className={state.valid}
      name="email"
      type="email"
      placeholder="Enter email address"
      icon={<Icon icon={iosEmailOutline} />}
      iconPosition="left"
      required={true}
      onChange={e => handleOnChange(e.target.value)}
      aria-label="email"
    />
    <ButtonGroup>
      <Button
        type="submit"
        colors="primaryWithBg"
        title="STAY TUNED"
      />
      <Button
        title="EXPLORE NOW"
        variant="textButton"
        icon={<i className="flaticon-next" />}
      />
    </ButtonGroup>
  </FormWrapper>
  )

  if (emailSent === 1){
    displayEmailUpdates = <Heading as="h1" content="Thank you for signing up to receive email updates!"/>
  } else if (emailSent === 2){
    displayEmailUpdates = <Heading as="h1" content="Email already exists. Thank you for your support!"/>
  }

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <HighlightedText>
              <strong>{discount}</strong> {discountLabel}
            </HighlightedText>
            <Heading as="h1" content={title} />
            <Text content={text} />
            { displayEmailUpdates }
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map(item => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <a className="item_wrapper" href={item.link}>
                      <Image src={item.thumb_url} alt={item.title} />
                      <Heading as="h4" content={item.title} />
                    </a>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
