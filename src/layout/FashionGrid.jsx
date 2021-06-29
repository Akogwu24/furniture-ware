import React from 'react';
import styled from 'styled-components';
import GridHeader from '../components/GridHeader';
import { Wrapper } from './Header';
import short1 from '../assets/images/gallery1.jpg';
import short2 from '../assets/images/gallery2.jpg';
import longImg from '../assets/images/gallery3.jpg';

const FashionGrid = () => {
  return (
    <Wrapper>
      <Container>
        <GridHeader header='Fashion' subHeader='Glamourous and Spicy styling' />
      </Container>
      <FashionImages>
        <div className='col long-fashion'>
          <img className='long-img' src={longImg} alt='model' />
        </div>
        <div className='col'>
          <div
            className='short-img1-container'
            style={{ overflow: 'hidden', height: '50%', marginBottom: '1rem' }}
          >
            <img className='short-img1 short-img' src={short1} alt='model' />
          </div>
          <div
            className='short-img2-container'
            style={{ overflow: 'hidden', height: '50%' }}
          >
            <img className='short-img2 short-img' src={short2} alt='model' />
          </div>
        </div>
      </FashionImages>
    </Wrapper>
  );
};

export default FashionGrid;

const Container = styled.div`
  margin: 5rem 0;
`;

const FashionImages = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10rem;

  .col {
    width: 50%;
    height: 500px;
    overflow: hidden;
    margin-left: 1rem;
    @media (max-width: 450px) {
      width: 90%;
      margin-left: 0;
      margin: 0 auto;
      height: 700px;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 400px) {
    }

    &:hover {
      transform: scale(1.1);
    }
  }
  .long-img {
    height: 100%;
  }

  .short-img {
    height: 100%;
  }
`;
