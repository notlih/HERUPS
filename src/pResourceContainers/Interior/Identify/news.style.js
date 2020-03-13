import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'

const SectionWrapper = styled.div`
  padding-bottom: 20px;
  position: relative;
  @media only screen and (max-width: 1440px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 1360px) {
    margin-top: 60px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 22px;
  }

  
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 1600px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 1440px) {
    padding: 0 50px;
    margin-bottom: -30px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 0 30px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 0 -30px;
    @media only screen and (max-width: 667px) {
      padding: 0 30px;
    }

    .col {
      width: calc(100% / 4);
      padding: 0 50px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25vw;
      color: #F5F5F5;
      font-weight: 500;
      @media only screen and (min-width: 768px) and (max-width: 1200px) {
        font-size: 22vw;
      }
      @media only screen and (max-width: 767px) {
        height: auto;
        padding: 0;
      }
      &:last-child {
        color: #fffbc0;
      }
    }
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  position: relative;
  justify-content: space-around;
  
`;

export const NewsItem = styled.div`
  padding: 0 50px;
  @media only screen and (max-width: 1440px) {
    padding: 0 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 0 15px;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2);
    margin-top: 50px;
  }
  @media only screen and (max-width: 480px) {
    width: calc(100% / 1);
  }

  h3 {
    font-weight: 400;
    margin: 0 0 22px;
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
      font-size: 18px;
      line-height: 28px;
      margin: 0 0 15px;
    }
  }

  p {
    margin: 0 0 40px;
  }
`;

export default SectionWrapper;
