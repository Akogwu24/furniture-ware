import React from 'react';
import styled from 'styled-components';
import GridHeader from '../components/GridHeader';
import Product from '../components/Product';
import { Wrapper } from './Header';
import baby from '../assets/images/baby.jpg';
import lady from '../assets/images/blue-lady.jpg';
import man from '../assets/images/man.jpg';
const NewArrival = () => {
  return (
    <Wrapper>
      <GridHeader
        header='Its All New, It All Arrived This Week'
        subHeader='Add our new Arrivals to your weekly line up'
      />
      <NewArrivalContainer>
        <Div>
          <Product productImg={baby} productName="Baby's Collections" />
        </Div>
        <LongDiv className='middle-img'>
          <Product
            className='man-img'
            productImg={man}
            productName="Men's Collection"
          />
        </LongDiv>
        <Div>
          <Product
            className='lady-img'
            productImg={lady}
            productName="Women's collection"
          />
        </Div>
      </NewArrivalContainer>
    </Wrapper>
  );
};

export default NewArrival;

const NewArrivalContainer = styled.div`
  display: flex;
  margin: 5rem 0 20rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font: oblique 5rem;
  @media (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 10rem;
  }
`;

const Div = styled.div`
  width: 300px;
  height: 300px;
  padding: 0;
  transition: all 1s ease-in-out;
  img {
    width: 100%;
    height: 300px;
    padding: 0;
    border-radius: 0;
    object-fit: cover;
    box-shadow: 2px 2px 10px #758b86;
  }
  :hover {
    transform: rotate(15deg);
  }
  @media (max-width: 400px) {
    :hover {
      transform: rotateY(360deg);
    }
  }
`;
const LongDiv = styled.div`
  width: 300px;
  height: 350px;
  transition: 0.7s all ease-in-out;
  img {
    height: 350px;
    padding: 0;
    border-radius: 0;
    object-fit: cover;
  }
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 450px) {
    margin: 8rem 0 8rem 0;
    :hover {
      transform: rotateY(360deg);
    }
  }
`;
