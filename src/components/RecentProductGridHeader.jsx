import React from 'react';
import styled from 'styled-components';

const RecentProduct = () => {
  return (
    <Div>
      <h1>Recent Products</h1>
      <p>Add our new arrivals to your weekly lineup</p>
    </Div>
  );
};
export default RecentProduct;

const Div = styled.div`
  width: 100%;
  margin: 10rem auto;
  text-align: center;

  h1 {
    font: 700 8rem 'Yanone Kaffeesatz', sans-serif;
  }
  P {
    color: rgba(0, 0, 0, 0.568);
    font: italic 3rem 'Roboto Condensed', sans-serif;
  }
`;
