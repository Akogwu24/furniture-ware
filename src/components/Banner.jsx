import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <Slide backgroundImg={slide1}>
          <BannerContent>
            <p>Connect with your roots</p>
            <h1>Dscoer the Newest African Jewely Collection in Stock</h1>
            <a href='/'>Shop Now</a>
          </BannerContent>
        </Slide>
        <Slide backgroundImg={slide2}>
          <BannerContent>
            <p>Connect with your roots</p>
            <h1>Dscoer the Newest African Jewely Collection in Stock</h1>
            <a href='/'>Shop Now</a>
          </BannerContent>
        </Slide>
        <Slide backgroundImg={slide3}>
          <BannerContent>
            <p>Connect with your roots</p>
            <h1>Dscoer the Newest African Jewely Collection in Stock</h1>
            <a href='/'>Shop Now</a>
          </BannerContent>
        </Slide>
      </Slider>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 90%;
  margin: 5rem auto;
  background: green;
`;

const Slide = styled.div`
  max-width: 100%;
  height: 50rem;
  background: ${(props) => `url(${props.backgroundImg})`};
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  color: white;
  display: flex !important; // due to sytles from styles from the slider library
  align-items: center;
`;

const BannerContent = styled.div`
  width: 550px;
  margin-left: 7.5%;
  p {
    font-size: 2rem;
  }
  h1 {
    font-size: 5rem;
    letter-spacing: 2px;
    margin: 2rem 0;
    font-weight: Bold;
  }
  a {
    display: inline-block;
    background-color: #e7d78e;
    padding: 1rem 4rem;
    color: black;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    align-self: center;
    :hover {
      background-color: #dfdbc9;
    }
  }
`;
