import React from 'react';
import styled from 'styled-components';

const RecentProduct = ({ header, subHeader }) => {
  return (
    <Div>
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </Div>
  );
};
export default RecentProduct;

const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  P {
    color: rgba(0, 0, 0, 0.568);
    font: italic 3rem 'Roboto Condensed', sans-serif;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
