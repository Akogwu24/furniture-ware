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
            className='baby-img'
            productImg={baby}
            productName="Baby's Collections"
            productPrice={`NGN ${500}`}
          />
        </Div>
        <Div>
          <Product
            className='man-img'
            productImg={man}
            productName="Men's Collection"
            productPrice={`NGN ${2500}`}
          />
        </Div>
        <Div>
          <Product
            className='lady-img'
            productImg={lady}
            productName="Women's collection"
            productPrice={`NGN ${3300}`}
          />
        </Div>
      </NewArrivalContainer>
    </Wrapper>
  );
};

export default NewArrival;

const NewArrivalContainer = styled.div`
  display: flex;
  margin: 5rem 0;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  width: 200px;
  height: 280px;
  background-color: green;
  .baby-img {
    height: 500px;
  }
`;
