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
          <Product
            productImg={baby}
            productName="Baby's Collections"
            // productPrice={`NGN ${500}`}
          />
        </Div>
        <LongDiv className='middle-img'>
          <Product
            className='man-img'
            productImg={man}
            productName="Men's Collection"
            // productPrice={`NGN ${2500}`}
          />
        </LongDiv>
        <Div>
          <Product
            className='lady-img'
            productImg={lady}
            productName="Women's collection"
            // productPrice={`NGN ${3300}`}
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
`;

const Div = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  transition: all 1s ease-in-out;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    box-shadow: 2px 2px 10px #758b86;
  }
  :hover {
    transform: rotate(15deg);
  }
`;
const LongDiv = styled.div`
  width: 300px;
  background-color: red;
  height: 350px;
  transition: 0.5s all ease-in-out;
  img {
    height: 350px;
    object-fit: cover;
  }
  :hover {
    transform: scale(1.1);
  }
`;
